# Решение проблем с деплоем

## Быстрое исправление

Подключитесь к серверу и выполните по порядку:

```bash
ssh root@144.31.64.130
cd /var/www/bote-site
```

### Вариант 1: Автоматическое исправление

Скопируйте скрипт на сервер и выполните:
```bash
# На вашем компьютере
scp /Users/mac/Documents/1/bote-site/FIX_DEPLOY.sh root@144.31.64.130:/root/

# На сервере
chmod +x /root/FIX_DEPLOY.sh
/root/FIX_DEPLOY.sh
```

### Вариант 2: Ручное исправление

Выполните команды по порядку:

```bash
# 1. Проверка Node.js
node --version
# Если не установлен:
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

# 2. Установка PM2 (если нет)
npm install -g pm2

# 3. Переходим в директорию проекта
cd /var/www/bote-site

# 4. Устанавливаем зависимости
npm install --production

# 5. Собираем проект
npm run build

# 6. Останавливаем старое приложение
pm2 delete bote-site

# 7. Запускаем
pm2 start npm --name "bote-site" -- start

# 8. Сохраняем
pm2 save

# 9. Проверяем статус
pm2 list
pm2 logs bote-site
```

## Частые проблемы

### Проблема 1: Порт занят или не открыт

```bash
# Проверяем, что слушает порт
netstat -tlnp | grep 3001

# Если ничего не слушает, проверяем файрвол
ufw status
# Открываем порт
ufw allow 3001/tcp

# Или для firewalld
firewall-cmd --permanent --add-port=3001/tcp
firewall-cmd --reload
```

### Проблема 2: Ошибки при сборке

```bash
cd /var/www/bote-site
rm -rf .next node_modules
npm install
npm run build
pm2 restart bote-site
```

### Проблема 3: PM2 не запускает приложение

```bash
# Проверяем логи
pm2 logs bote-site --err

# Пробуем запустить напрямую для проверки
cd /var/www/bote-site
npm start

# Если работает напрямую, но не через PM2, создаем ecosystem.config.js
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'bote-site',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/bote-site',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    }
  }]
}
EOF

pm2 delete bote-site
pm2 start ecosystem.config.js
pm2 save
```

### Проблема 4: Ошибки модулей

```bash
cd /var/www/bote-site
rm -rf node_modules package-lock.json
npm install --production
npm run build
```

### Проблема 5: Проверка работы приложения

```bash
# Проверяем логи в реальном времени
pm2 logs bote-site --lines 50

# Проверяем, что процесс запущен
ps aux | grep node

# Проверяем порт
curl http://localhost:3001
# или
wget -O- http://localhost:3001
```

## Проверка после исправления

1. **Статус PM2:**
   ```bash
   pm2 list
   ```
   Должен показать `bote-site` со статусом `online`

2. **Логи:**
   ```bash
   pm2 logs bote-site
   ```
   Не должно быть ошибок

3. **Порт:**
   ```bash
   netstat -tlnp | grep 3001
   ```
   Должен показывать, что порт слушается

4. **Локальная проверка на сервере:**
   ```bash
   curl http://localhost:3001
   ```
   Должен вернуть HTML страницы

5. **Внешний доступ:**
   Откройте в браузере: `http://144.31.64.130:3001`

## Если ничего не помогает

1. Проверьте, что все файлы на месте:
   ```bash
   ls -la /var/www/bote-site
   ```

2. Проверьте права доступа:
   ```bash
   chown -R root:root /var/www/bote-site
   ```

3. Пересоздайте проект с нуля:
   ```bash
   cd /var/www
   rm -rf bote-site
   mkdir bote-site
   cd bote-site
   # Затем заново распакуйте архив
   tar -xzf /tmp/deploy.tar.gz
   npm install --production
   npm run build
   pm2 start npm --name "bote-site" -- start
   ```



