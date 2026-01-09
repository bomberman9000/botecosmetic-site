# Инструкция по деплою на VPS

## Быстрый деплой

### Шаг 1: Скопируйте архив на сервер

```bash
scp /Users/mac/Documents/1/bote-site/deploy.tar.gz root@144.31.64.130:/tmp/
```

### Шаг 2: Подключитесь к серверу

```bash
ssh root@144.31.64.130
```

### Шаг 3: На сервере выполните команды

Скопируйте и выполните файл SERVER_COMMANDS.sh или выполните команды вручную:

```bash
# Создаем директорию
mkdir -p /var/www/bote-site
cd /var/www/bote-site

# Распаковываем архив
tar -xzf /tmp/deploy.tar.gz
rm /tmp/deploy.tar.gz

# Устанавливаем Node.js (если не установлен)
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

# Устанавливаем PM2
npm install -g pm2

# Устанавливаем зависимости
npm install --production

# Собираем проект
npm run build

# Запускаем через PM2
pm2 start npm --name "bote-site" -- start
pm2 save
pm2 startup
```

## Настройка Nginx (для домена)

Если у вас есть домен, настройте Nginx:

```bash
# Устанавливаем Nginx
apt-get install -y nginx

# Создаем конфигурацию
nano /etc/nginx/sites-available/bote-site
```

Вставьте:

```nginx
server {
    listen 80;
    server_name ваш-домен.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Активируйте:

```bash
ln -s /etc/nginx/sites-available/bote-site /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

## Полезные команды

- `pm2 list` - список процессов
- `pm2 logs bote-site` - логи приложения
- `pm2 restart bote-site` - перезапуск
- `pm2 stop bote-site` - остановка
- `pm2 monit` - мониторинг

## Проверка работы

После деплоя приложение будет доступно по адресу:
- `http://144.31.64.130:3001` (прямой доступ)
- Или через домен, если настроен Nginx

