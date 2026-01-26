#!/bin/bash

# Простой автоматический деплой - всё в одном скрипте

set -e

VPS_HOST="root@144.31.64.130"
SERVER_PASSWORD="Mandibulla1982"
SSH_KEY="$HOME/.ssh/id_ed25519_bote_new"
REMOTE_DIR="/var/www/bote-site"

cd "$(dirname "$0")"

echo "🚀 ДЕПЛОЙ VIA LABOTE"
echo "════════════════════════════════════════"
echo ""

# Шаг 1: Проверяем и добавляем SSH ключ на сервер
if [ -f "$SSH_KEY.pub" ]; then
    echo "🔑 Шаг 1/5: Настраиваю SSH ключ..."
    PUBLIC_KEY=$(cat "$SSH_KEY.pub")
    
    # Проверяем expect
    if ! command -v expect &> /dev/null; then
        echo "   Устанавливаю expect..."
        brew install expect 2>/dev/null || echo "   ⚠️  Установите expect: brew install expect"
    fi
    
    # Добавляем ключ на сервер
    expect << EOF 2>/dev/null
set timeout 10
spawn ssh -o IdentitiesOnly=yes -o PreferredAuthentications=password -o PubkeyAuthentication=no -o StrictHostKeyChecking=no $VPS_HOST "grep -q '$PUBLIC_KEY' ~/.ssh/authorized_keys 2>/dev/null || (mkdir -p ~/.ssh && chmod 700 ~/.ssh && echo '$PUBLIC_KEY' >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys)"
expect {
    "password:" { send "$SERVER_PASSWORD\r"; exp_continue }
    "yes/no" { send "yes\r"; exp_continue }
    eof
}
EOF
    echo "✅ SSH ключ настроен"
else
    echo "⚠️  SSH ключ не найден, использую пароль"
fi
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
echo "✅ Архив создан: $ARCHIVE_SIZE"
echo ""

# Шаг 4: Загрузка на сервер
echo "📤 Шаг 4/5: Загружаю на сервер..."
if [ -f "$SSH_KEY" ]; then
    scp -i "$SSH_KEY" -o StrictHostKeyChecking=no deploy.tar.gz "$VPS_HOST:/tmp/" 2>/dev/null || {
        echo "   Пробую с паролем..."
        expect << EOF
set timeout 60
spawn scp -o IdentitiesOnly=yes -o PreferredAuthentications=password -o PubkeyAuthentication=no -o StrictHostKeyChecking=no deploy.tar.gz $VPS_HOST:/tmp/
expect {
    "password:" { send "$SERVER_PASSWORD\r"; exp_continue }
    "yes/no" { send "yes\r"; exp_continue }
    eof
}
EOF
    }
else
    expect << EOF
set timeout 60
spawn scp -o IdentitiesOnly=yes -o PreferredAuthentications=password -o PubkeyAuthentication=no -o StrictHostKeyChecking=no deploy.tar.gz $VPS_HOST:/tmp/
expect {
    "password:" { send "$SERVER_PASSWORD\r"; exp_continue }
    "yes/no" { send "yes\r"; exp_continue }
    eof
}
EOF
fi
echo "✅ Архив загружен"
echo ""

# Шаг 5: Установка на сервере
echo "🔧 Шаг 5/5: Устанавливаю на сервере..."
if [ -f "$SSH_KEY" ]; then
    if ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no -o ConnectTimeout=5 "$VPS_HOST" "echo 'test'" 2>/dev/null; then
        ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no "$VPS_HOST" << 'ENDSSH'
set -e
cd /var/www/bote-site
mkdir -p /var/www/bote-site
cd /var/www/bote-site
tar -xzf /tmp/deploy.tar.gz
rm /tmp/deploy.tar.gz
npm install
npm run build
pm2 delete bote-site 2>/dev/null || true
pm2 start ecosystem.config.js 2>/dev/null || pm2 start npm --name "bote-site" -- start
pm2 save
pm2 list
ENDSSH
    else
        echo "   Пробую с паролем..."
        expect << 'ENDEXPECT'
set timeout 600
spawn ssh -o IdentitiesOnly=yes -o PreferredAuthentications=password -o PubkeyAuthentication=no -o StrictHostKeyChecking=no root@144.31.64.130
expect {
    "password:" { send "Mandibulla1982\r"; exp_continue }
    "yes/no" { send "yes\r"; exp_continue }
    "# " {
        send "cd /var/www/bote-site && mkdir -p /var/www/bote-site && tar -xzf /tmp/deploy.tar.gz && rm /tmp/deploy.tar.gz && npm install && npm run build && pm2 delete bote-site 2>/dev/null || true && pm2 start ecosystem.config.js 2>/dev/null || pm2 start npm --name 'bote-site' -- start && pm2 save && pm2 list && exit\r"
        expect "# "
    }
    eof
}
ENDEXPECT
    fi
else
    expect << EOF
set timeout 600
spawn ssh -o IdentitiesOnly=yes -o PreferredAuthentications=password -o PubkeyAuthentication=no -o StrictHostKeyChecking=no $VPS_HOST
expect {
    "password:" { send "$SERVER_PASSWORD\r"; exp_continue }
    "yes/no" { send "yes\r"; exp_continue }
    "# " {
        send "cd /var/www/bote-site && mkdir -p /var/www/bote-site && tar -xzf /tmp/deploy.tar.gz && rm /tmp/deploy.tar.gz && npm install && npm run build && pm2 delete bote-site 2>/dev/null || true && pm2 start ecosystem.config.js 2>/dev/null || pm2 start npm --name 'bote-site' -- start && pm2 save && pm2 list && exit\r"
        expect "# "
    }
    eof
}
EOF
fi

# Удаляем локальный архив
rm -f deploy.tar.gz

echo ""
echo "════════════════════════════════════════"
echo "✅ ДЕПЛОЙ ЗАВЕРШЕН!"
echo "════════════════════════════════════════"
echo ""
echo "🌐 Сайт: http://144.31.64.130:3001"
echo ""
echo "✨ Изменения применены:"
echo "   • Кадрирование hero: 60% 40% (десктоп)"
echo "   • Кадрирование hero: 50% 25% (мобилка)"
echo ""
