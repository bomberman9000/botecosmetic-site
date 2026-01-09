#!/bin/bash

# ОДНА КОМАНДА ДЛЯ ДЕПЛОЯ
# Запустите этот скрипт, когда SSH будет доступен

VPS_HOST="root@144.31.64.130"
LOCAL_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "$LOCAL_DIR"

echo "🚀 Начинаю деплой..."

# Проверяем SSH
if ! ssh -o ConnectTimeout=3 "$VPS_HOST" "echo OK" &>/dev/null; then
    echo "❌ SSH недоступен. Пробую альтернативные порты..."
    
    for port in 2222 22022 22000; do
        if ssh -o ConnectTimeout=3 -p $port "$VPS_HOST" "echo OK" &>/dev/null; then
            SSH_CMD="ssh -p $port"
            SCP_CMD="scp -P $port"
            break
        fi
    done
    
    if [ -z "$SSH_CMD" ]; then
        echo ""
        echo "════════════════════════════════════════"
        echo "❌ SSH недоступен. Невозможно автоматически подключиться."
        echo ""
        echo "📋 ЧТО НУЖНО СДЕЛАТЬ ВРУЧНУЮ:"
        echo "════════════════════════════════════════"
        echo ""
        echo "1. Откройте панель управления вашего VPS"
        echo "2. Найдите 'Файловый менеджер'"
        echo "3. Загрузите файл: $LOCAL_DIR/deploy.tar.gz"
        echo "   → в директорию /tmp/ на сервере"
        echo ""
        echo "4. Откройте 'Web SSH' или 'Консоль' в панели"
        echo "5. Скопируйте и выполните команды из файла:"
        echo "   COMMANDS_FOR_SERVER.txt"
        echo ""
        echo "Или выполните эти команды на сервере:"
        echo "─────────────────────────────────────────"
        cat "$LOCAL_DIR/COMMANDS_FOR_SERVER.txt"
        echo "─────────────────────────────────────────"
        echo ""
        exit 1
    fi
else
    SSH_CMD="ssh"
    SCP_CMD="scp"
fi

# Собираем проект
echo "📦 Собираю проект..."
npm run build

# Создаем архив
echo "📦 Создаю архив..."
rm -f deploy.tar.gz
tar -czf deploy.tar.gz \
    --exclude='node_modules' \
    --exclude='.next' \
    --exclude='.git' \
    --exclude='deploy*.tar.gz' \
    --exclude='*.log' \
    . 2>/dev/null

# Копируем
echo "📤 Копирую на сервер..."
$SCP_CMD deploy.tar.gz "$VPS_HOST:/tmp/"

# Выполняем на сервере
echo "🔧 Устанавливаю на сервере..."
$SSH_CMD "$VPS_HOST" << 'ENDSSH'
set -e
cd /var/www/bote-site
mkdir -p /var/www/bote-site
cd /var/www/bote-site
tar -xzf /tmp/deploy.tar.gz
rm /tmp/deploy.tar.gz
npm install
npm run build
pm2 delete bote-site 2>/dev/null || true
pm2 start npm --name "bote-site" -- start
pm2 save
pm2 list
ENDSSH

rm deploy.tar.gz
echo ""
echo "✅ Деплой завершен! http://144.31.64.130:3001"



