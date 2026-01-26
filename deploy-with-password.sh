#!/bin/bash

# Деплой с использованием пароля (одноразовая настройка)

set -e

VPS_HOST="root@144.31.64.130"
PASSWORD="Mandibulla82"
REMOTE_DIR="/var/www/bote-site"
LOCAL_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SSH_KEY="$HOME/.ssh/id_ed25519_bote"

cd "$LOCAL_DIR"

echo "🚀 Настраиваю автоматический деплой..."
echo ""

# Проверяем наличие SSH ключа
if [ ! -f "$SSH_KEY" ]; then
    echo "❌ SSH ключ не найден"
    exit 1
fi

# Шаг 1: Добавляем ключ на сервер (если еще не добавлен)
echo "🔑 Шаг 1/5: Настраиваю SSH ключ на сервере..."
PUBLIC_KEY=$(cat "$SSH_KEY.pub")

# Проверяем, есть ли expect
if command -v expect &> /dev/null; then
    expect << EOF
set timeout 30
spawn ssh $VPS_HOST "mkdir -p ~/.ssh && chmod 700 ~/.ssh && grep -q '$PUBLIC_KEY' ~/.ssh/authorized_keys || echo '$PUBLIC_KEY' >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"
expect {
    "password:" {
        send "$PASSWORD\r"
        exp_continue
    }
    "yes/no" {
        send "yes\r"
        exp_continue
    }
    eof
}
EOF
else
    # Альтернативный метод через sshpass
    if command -v sshpass &> /dev/null; then
        sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$VPS_HOST" "mkdir -p ~/.ssh && chmod 700 ~/.ssh && grep -q '$PUBLIC_KEY' ~/.ssh/authorized_keys || echo '$PUBLIC_KEY' >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"
    else
        echo "⚠️  expect или sshpass не установлены. Добавляю ключ вручную..."
        ssh "$VPS_HOST" "mkdir -p ~/.ssh && chmod 700 ~/.ssh && grep -q '$PUBLIC_KEY' ~/.ssh/authorized_keys || echo '$PUBLIC_KEY' >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"
    fi
fi

echo "✅ SSH ключ настроен"
echo ""

# Шаг 2: Сборка проекта
echo "📦 Шаг 2/5: Собираю проект..."
npm run build
echo "✅ Проект собран"
echo ""

# Шаг 3: Создание архива
echo "📦 Шаг 3/5: Создаю архив..."
rm -f deploy.tar.gz
tar -czf deploy.tar.gz \
    --exclude='node_modules' \
    --exclude='.next' \
    --exclude='.git' \
    --exclude='deploy*.tar.gz' \
    --exclude='*.log' \
    --exclude='.DS_Store' \
    . 2>/dev/null

ARCHIVE_SIZE=$(du -h deploy.tar.gz | cut -f1)
echo "✅ Архив создан: deploy.tar.gz ($ARCHIVE_SIZE)"
echo ""

# Шаг 4: Загрузка на сервер
echo "📤 Шаг 4/5: Загружаю на сервер..."

if command -v sshpass &> /dev/null; then
    sshpass -p "$PASSWORD" scp -o StrictHostKeyChecking=no deploy.tar.gz "$VPS_HOST:/tmp/"
else
    scp -i "$SSH_KEY" deploy.tar.gz "$VPS_HOST:/tmp/" 2>/dev/null || \
    scp deploy.tar.gz "$VPS_HOST:/tmp/"
fi

echo "✅ Архив загружен"
echo ""

# Шаг 5: Установка на сервере
echo "🔧 Шаг 5/5: Устанавливаю на сервере..."

if command -v sshpass &> /dev/null; then
    sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$VPS_HOST" << 'ENDSSH'
set -e
cd /var/www/bote-site
mkdir -p /var/www/bote-site
cd /var/www/bote-site
echo "📦 Распаковываю архив..."
tar -xzf /tmp/deploy.tar.gz
rm /tmp/deploy.tar.gz
echo "📦 Устанавливаю зависимости..."
npm install
echo "🔨 Собираю проект..."
npm run build
echo "🔄 Перезапускаю приложение..."
pm2 delete bote-site 2>/dev/null || true
pm2 start ecosystem.config.js 2>/dev/null || pm2 start npm --name "bote-site" -- start
pm2 save
echo "✅ Деплой завершен на сервере"
pm2 list
ENDSSH
else
    ssh -i "$SSH_KEY" "$VPS_HOST" << 'ENDSSH'
set -e
cd /var/www/bote-site
mkdir -p /var/www/bote-site
cd /var/www/bote-site
echo "📦 Распаковываю архив..."
tar -xzf /tmp/deploy.tar.gz
rm /tmp/deploy.tar.gz
echo "📦 Устанавливаю зависимости..."
npm install
echo "🔨 Собираю проект..."
npm run build
echo "🔄 Перезапускаю приложение..."
pm2 delete bote-site 2>/dev/null || true
pm2 start ecosystem.config.js 2>/dev/null || pm2 start npm --name "bote-site" -- start
pm2 save
echo "✅ Деплой завершен на сервере"
pm2 list
ENDSSH
fi

# Удаляем локальный архив
rm -f deploy.tar.gz

echo ""
echo "════════════════════════════════════════"
echo "✅ ДЕПЛОЙ ЗАВЕРШЕН УСПЕШНО!"
echo "════════════════════════════════════════"
echo ""
echo "🌐 Сайт доступен: http://144.31.64.130:3001"
echo ""
echo "✨ Применены изменения:"
echo "   • Кадрирование hero-баннеров исправлено"
echo "   • Десктоп: object-position: 60% 40%"
echo "   • Мобилка: object-position: 50% 25%"
echo "   • Лицо модели всегда в фокусной зоне"
echo ""
