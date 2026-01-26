#!/bin/bash

# Финальный скрипт автоматического деплоя с новым SSH ключом

set -e

VPS_HOST="root@144.31.64.130"
REMOTE_DIR="/var/www/bote-site"
LOCAL_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SSH_KEY="$HOME/.ssh/id_ed25519_bote"

cd "$LOCAL_DIR"

echo "🚀 Автоматический деплой VIA LABOTE"
echo "════════════════════════════════════════"
echo ""

# Проверяем наличие SSH ключа
if [ ! -f "$SSH_KEY" ]; then
    echo "❌ SSH ключ не найден: $SSH_KEY"
    echo "   Запустите сначала: ./setup-ssh-key.sh"
    exit 1
fi

# Шаг 1: Сборка проекта
echo "📦 Шаг 1/4: Собираю проект..."
npm run build
echo "✅ Проект собран"
echo ""

# Шаг 2: Создание архива
echo "📦 Шаг 2/4: Создаю архив..."
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

# Шаг 3: Загрузка на сервер
echo "📤 Шаг 3/4: Загружаю на сервер..."
scp -i "$SSH_KEY" deploy.tar.gz "$VPS_HOST:/tmp/"

if [ $? -ne 0 ]; then
    echo "❌ Ошибка загрузки. Возможно, ключ не добавлен на сервер."
    echo "   Запустите: ./setup-ssh-key.sh"
    exit 1
fi

echo "✅ Архив загружен"
echo ""

# Шаг 4: Установка на сервере
echo "🔧 Шаг 4/4: Устанавливаю на сервере..."
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
