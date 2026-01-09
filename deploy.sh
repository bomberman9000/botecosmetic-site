#!/bin/bash

# Скрипт для деплоя на VPS
# Использование: ./deploy.sh user@hostname

set -e

if [ -z "$1" ]; then
    echo "Использование: ./deploy.sh user@hostname"
    echo "Пример: ./deploy.sh root@192.168.1.1"
    exit 1
fi

VPS_HOST=$1
APP_NAME="bote-site"
REMOTE_DIR="/var/www/$APP_NAME"

echo "🚀 Начинаю деплой на $VPS_HOST..."

# Собираем проект
echo "📦 Собираю проект..."
npm run build

# Создаем архив
echo "📦 Создаю архив..."
tar -czf deploy.tar.gz \
    --exclude='node_modules' \
    --exclude='.next' \
    --exclude='.git' \
    --exclude='deploy.tar.gz' \
    .

# Копируем на сервер
echo "📤 Копирую файлы на сервер..."
scp deploy.tar.gz $VPS_HOST:/tmp/

# Подключаемся к серверу и распаковываем
echo "🔧 Настраиваю на сервере..."
ssh $VPS_HOST << EOF
    # Создаем директорию если не существует
    mkdir -p $REMOTE_DIR
    
    # Распаковываем архив
    cd $REMOTE_DIR
    tar -xzf /tmp/deploy.tar.gz
    rm /tmp/deploy.tar.gz
    
    # Устанавливаем зависимости
    echo "📦 Устанавливаю зависимости..."
    npm install --production
    
    # Собираем проект на сервере
    echo "🔨 Собираю проект..."
    npm run build
    
    # Создаем PM2 конфигурацию (если используется PM2)
    cat > ecosystem.config.js << PM2EOF
module.exports = {
  apps: [{
    name: '$APP_NAME',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    cwd: '$REMOTE_DIR',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    }
  }]
}
PM2EOF

    echo "✅ Деплой завершен!"
    echo "📝 Для запуска выполните:"
    echo "   cd $REMOTE_DIR"
    echo "   pm2 start ecosystem.config.js"
    echo "   pm2 save"
EOF

# Удаляем локальный архив
rm deploy.tar.gz

echo "✅ Деплой завершен!"
echo "📝 Подключитесь к серверу и запустите приложение:"
echo "   ssh $VPS_HOST"
echo "   cd $REMOTE_DIR"
echo "   pm2 start ecosystem.config.js"
echo "   pm2 save"



