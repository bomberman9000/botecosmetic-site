#!/bin/bash

# Настройка нового SSH ключа на сервере

set -e

VPS_HOST="root@144.31.64.130"
SERVER_PASSWORD="Mandibulla1982"
SSH_KEY="$HOME/.ssh/id_ed25519_bote_new"
PUBLIC_KEY_FILE="$SSH_KEY.pub"

if [ ! -f "$PUBLIC_KEY_FILE" ]; then
    echo "❌ Публичный ключ не найден: $PUBLIC_KEY_FILE"
    exit 1
fi

PUBLIC_KEY=$(cat "$PUBLIC_KEY_FILE")

echo "🔑 Настраиваю новый SSH ключ на сервере..."
echo ""

# Проверяем наличие expect
if ! command -v expect &> /dev/null; then
    echo "❌ expect не установлен. Устанавливаю..."
    if command -v brew &> /dev/null; then
        brew install expect
    else
        echo "⚠️  Установите expect вручную: brew install expect"
        exit 1
    fi
fi

# Добавляем ключ на сервер
expect << EOF
set timeout 30
spawn ssh -o IdentitiesOnly=yes -o PreferredAuthentications=password -o PubkeyAuthentication=no -o StrictHostKeyChecking=no $VPS_HOST "mkdir -p ~/.ssh && chmod 700 ~/.ssh && grep -q '$PUBLIC_KEY' ~/.ssh/authorized_keys || echo '$PUBLIC_KEY' >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys && echo 'Ключ добавлен'"
expect {
    "password:" {
        send "$SERVER_PASSWORD\r"
        exp_continue
    }
    "yes/no" {
        send "yes\r"
        exp_continue
    }
    eof
}
set exit_code [wait]
if {[lindex \$exit_code 3] != 0} {
    exit [lindex \$exit_code 3]
}
EOF

if [ $? -eq 0 ]; then
    echo "✅ SSH ключ успешно добавлен на сервер!"
    echo ""
    echo "Теперь можно использовать автоматический деплой:"
    echo "   ./deploy-auto.sh"
else
    echo "❌ Ошибка добавления ключа"
    exit 1
fi
