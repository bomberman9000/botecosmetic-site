#!/bin/bash

# Команды для выполнения на сервере после копирования архива

APP_NAME="bote-site"
REMOTE_DIR="/var/www/$APP_NAME"

echo "📦 Начинаем деплой..."

# Создаем директорию
mkdir -p $REMOTE_DIR
cd $REMOTE_DIR

# Распаковываем архив
echo "📦 Распаковываю архив..."
tar -xzf /tmp/deploy.tar.gz
rm /tmp/deploy.tar.gz

# Проверяем Node.js (устанавливаем если нет)
if ! command -v node &> /dev/null; then
    echo "📦 Устанавливаю Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
    apt-get install -y nodejs
fi

# Устанавливаем PM2 (если нет)
if ! command -v pm2 &> /dev/null; then
    echo "📦 Устанавливаю PM2..."
    npm install -g pm2
fi

# Устанавливаем зависимости
echo "📦 Устанавливаю зависимости..."
npm install --production

# Собираем проект
echo "📦 Собираю проект..."
npm run build

# Создаем PM2 конфигурацию
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'bote-site',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    cwd: '/var/www/bote-site',
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
EOF

# Останавливаем старый процесс если есть
pm2 delete bote-site 2>/dev/null || true

# Запускаем приложение
echo "🚀 Запускаю приложение..."
pm2 start ecosystem.config.js

# Сохраняем конфигурацию PM2
pm2 save

# Настраиваем автозапуск
pm2 startup

echo "✅ Деплой завершен!"
echo "🌐 Приложение запущено на порту 3000"
echo "📝 Для просмотра логов: pm2 logs bote-site"
echo "📝 Для перезапуска: pm2 restart bote-site"

