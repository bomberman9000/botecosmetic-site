#!/bin/bash

# Скрипт для выполнения НА СЕРВЕРЕ после загрузки архива
# Выполните: bash DEPLOY_ON_SERVER.sh

set -e

APP_NAME="bote-site"
REMOTE_DIR="/var/www/$APP_NAME"

echo "🚀 Начинаю деплой на сервере..."
echo "════════════════════════════════════════"

# Проверяем наличие архива
if [ ! -f "/tmp/deploy.tar.gz" ]; then
    echo "❌ Архив /tmp/deploy.tar.gz не найден!"
    echo "Сначала скопируйте архив на сервер:"
    echo "  scp deploy.tar.gz root@144.31.64.130:/tmp/"
    exit 1
fi

echo "✅ Архив найден"

# Создаем директорию
echo "📁 Создаю директорию проекта..."
mkdir -p "$REMOTE_DIR"
cd "$REMOTE_DIR"

# Распаковываем архив
echo "📦 Распаковываю архив..."
tar -xzf /tmp/deploy.tar.gz
rm /tmp/deploy.tar.gz

# Проверяем Node.js
if ! command -v node &> /dev/null; then
    echo "📦 Устанавливаю Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
    apt-get install -y nodejs
else
    echo "✅ Node.js уже установлен: $(node --version)"
fi

# Проверяем PM2
if ! command -v pm2 &> /dev/null; then
    echo "📦 Устанавливаю PM2..."
    npm install -g pm2
else
    echo "✅ PM2 уже установлен"
fi

# Устанавливаем зависимости
echo "📦 Устанавливаю зависимости..."
npm install

# Собираем проект
echo "🔨 Собираю проект..."
npm run build

# Останавливаем старое приложение
echo "🛑 Останавливаю старое приложение..."
pm2 delete "$APP_NAME" 2>/dev/null || true

# Запускаем приложение
echo "🚀 Запускаю приложение..."
pm2 start npm --name "$APP_NAME" -- start

# Сохраняем конфигурацию
pm2 save

# Показываем статус
echo ""
echo "✅ Деплой завершен!"
echo "════════════════════════════════════════"
pm2 list
echo ""
echo "🌐 Сайт доступен: http://144.31.64.130:3001"
echo "📝 Логи: pm2 logs $APP_NAME"



