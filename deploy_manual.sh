#!/bin/bash

# Скрипт для ручного деплоя на VPS
# После создания архива deploy.tar.gz, выполните эти команды на сервере

VPS_HOST="root@144.31.64.130"
APP_NAME="bote-site"
REMOTE_DIR="/var/www/$APP_NAME"

echo "📦 Архив готов! Теперь выполните следующие шаги:"
echo ""
echo "1. Скопируйте архив на сервер:"
echo "   scp deploy.tar.gz $VPS_HOST:/tmp/"
echo ""
echo "2. Подключитесь к серверу:"
echo "   ssh $VPS_HOST"
echo ""
echo "3. На сервере выполните:"
echo "   mkdir -p $REMOTE_DIR"
echo "   cd $REMOTE_DIR"
echo "   tar -xzf /tmp/deploy.tar.gz"
echo "   npm install --production"
echo "   npm run build"
echo "   pm2 start npm --name '$APP_NAME' -- start"
echo "   pm2 save"
echo ""



