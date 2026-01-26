#!/usr/bin/env bash
set -Eeuo pipefail
set -x

APP_DIR="/var/www/bote-site"
PM2_NAME="bote-site"
LOCAL_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Функция timeout для macOS (если нет команды timeout)
if ! command -v timeout &> /dev/null; then
    timeout() {
        local duration=$1
        shift
        perl -e 'alarm shift; exec @ARGV' "$duration" "$@"
    }
fi

cd "$LOCAL_DIR"

echo "════════════════════════════════════════"
echo "🚀 ДЕПЛОЙ VIA LABOTE"
echo "════════════════════════════════════════"
echo ""

# == STEP 1: Connect ==
echo "== STEP 1: Connect =="
if ! ssh -o ConnectTimeout=5 bote "echo connected" 2>/dev/null; then
    echo "❌ Не удалось подключиться к серверу"
    exit 1
fi
echo "✅ Подключение установлено"
echo ""

# == STEP 2: Build locally ==
echo "== STEP 2: Build (local) =="
echo "📦 Собираю проект локально..."
export NODE_OPTIONS='--max_old_space_size=4096'
if ! npm run build 2>&1; then
    echo "❌ Ошибка сборки проекта"
    exit 1
fi
echo "✅ Проект собран"
echo ""

# == STEP 3: Create archive ==
echo "== STEP 3: Create archive =="
echo "📦 Создаю архив..."
rm -f deploy.tar.gz
tar -czf deploy.tar.gz \
    --exclude='node_modules' \
    --exclude='.next' \
    --exclude='.git' \
    --exclude='deploy*.tar.gz' \
    --exclude='*.log' \
    --exclude='.DS_Store' \
    . 2>/dev/null || true
ARCHIVE_SIZE=$(du -h deploy.tar.gz | cut -f1)
echo "✅ Архив создан: $ARCHIVE_SIZE"
echo ""

# == STEP 4: Upload to server ==
echo "== STEP 4: Upload to server =="
if ! scp -o ConnectTimeout=30 deploy.tar.gz bote:/tmp/ 2>&1; then
    echo "❌ Ошибка загрузки архива"
    exit 1
fi
echo "✅ Архив загружен"
echo ""

# == STEP 5: Extract and install on server ==
echo "== STEP 5: Extract and install =="
if ! ssh bote << 'ENDSSH'
set -e
cd /var/www/bote-site
mkdir -p /var/www/bote-site
cd /var/www/bote-site
echo "📦 Распаковываю архив..."
tar -xzf /tmp/deploy.tar.gz
rm /tmp/deploy.tar.gz
echo "📦 Устанавливаю зависимости..."
export NODE_OPTIONS='--max_old_space_size=4096'
timeout 300 npm install --production=false 2>&1 || npm install --production=false 2>&1
echo "📦 Собираю проект на сервере..."
timeout 600 npm run build 2>&1 || npm run build 2>&1
echo "✅ Установка завершена"
ENDSSH
then
    echo "❌ Ошибка установки на сервере"
    exit 1
fi
echo ""

# == STEP 6: Restart PM2 ==
echo "== STEP 6: Restart PM2 =="
if ! ssh bote "pm2 restart $PM2_NAME 2>&1 || pm2 start ecosystem.config.js 2>&1 || pm2 start npm --name '$PM2_NAME' -- start 2>&1"; then
    echo "⚠️  Предупреждение: возможна проблема с PM2"
fi
ssh bote "pm2 save 2>&1" || true
echo "✅ PM2 перезапущен"
echo ""

# == STEP 7: Healthcheck ==
echo "== STEP 7: Healthcheck =="
HEALTH_STATUS=$(ssh bote "curl --max-time 5 -I http://localhost:3001 2>/dev/null | head -1" || echo "UNKNOWN")
echo "📊 Статус: $HEALTH_STATUS"
if echo "$HEALTH_STATUS" | grep -q "200\|HTTP"; then
    echo "✅ Сервис работает"
else
    echo "⚠️  Не удалось проверить статус сервиса"
fi
echo ""

# Cleanup
rm -f deploy.tar.gz

echo "════════════════════════════════════════"
echo "✨ DEPLOY FINISHED"
echo "════════════════════════════════════════"
echo ""
echo "🌐 Сайт: http://144.31.64.130:3001"
echo ""
ssh bote "pm2 list | grep $PM2_NAME || true" 2>/dev/null || true
echo ""