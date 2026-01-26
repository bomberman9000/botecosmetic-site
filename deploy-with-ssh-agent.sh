#!/bin/bash

# Деплой с использованием ssh-agent для автоматизации
# Пароль потребуется ввести только один раз

set -e

VPS_HOST="root@144.31.64.130"
REMOTE_DIR="/var/www/bote-site"
LOCAL_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "$LOCAL_DIR"

echo "🚀 Деплой с автоматизацией SSH"
echo ""

# Проверяем ssh-agent
if [ -z "$SSH_AUTH_SOCK" ]; then
    echo "🔑 Запускаю ssh-agent..."
    eval "$(ssh-agent -s)"
fi

# Добавляем ключ в ssh-agent (потребуется ввести пароль один раз)
echo "🔑 Добавляю SSH ключ в ssh-agent..."
echo "   (потребуется ввести пароль SSH ключа один раз)"
ssh-add ~/.ssh/id_ed25519 2>/dev/null || ssh-add

# Проверяем подключение
echo ""
echo "🔍 Проверяю подключение к серверу..."
if ssh -o BatchMode=yes -o ConnectTimeout=5 "$VPS_HOST" "echo 'Подключение успешно'" 2>/dev/null; then
    echo "✅ SSH подключение работает"
else
    echo "❌ Не удалось подключиться к серверу"
    exit 1
fi

# Собираем проект
echo ""
echo "📦 Собираю проект..."
npm run build

# Создаем архив
echo ""
echo "📦 Создаю архив..."
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

# Загружаем на сервер
echo ""
echo "📤 Загружаю архив на сервер..."
scp deploy.tar.gz "$VPS_HOST:/tmp/"

# Выполняем деплой на сервере
echo ""
echo "🔧 Устанавливаю на сервере..."
ssh "$VPS_HOST" << 'ENDSSH'
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

# Удаляем локальный архив
rm -f deploy.tar.gz

echo ""
echo "✅ Деплой завершен успешно!"
echo "🌐 Сайт доступен: http://144.31.64.130:3001"
echo ""
echo "💡 Изменения кадрирования hero-баннеров применены:"
echo "   - Десктоп: object-position: 60% 40%"
echo "   - Мобилка: object-position: 50% 25%"
