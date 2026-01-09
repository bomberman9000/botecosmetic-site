# Инструкция по деплою на VPS

## Предварительные требования на VPS

1. **Node.js и npm** (версия 18 или выше)
2. **PM2** (менеджер процессов для Node.js)
3. **Nginx** (для проксирования)

## Установка на VPS

### 1. Установка Node.js

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2. Установка PM2

```bash
sudo npm install -g pm2
```

### 3. Установка Nginx

```bash
sudo apt-get update
sudo apt-get install -y nginx
```

## Деплой

### Вариант 1: Автоматический деплой через скрипт

1. Отредактируйте `deploy.sh` и укажите данные вашего VPS
2. Запустите скрипт:

```bash
./deploy.sh user@your-vps-ip
```

### Вариант 2: Ручной деплой

1. Соберите проект локально:
```bash
npm run build
```

2. Скопируйте файлы на сервер:
```bash
scp -r . user@your-vps-ip:/var/www/bote-site/
```

3. На сервере:
```bash
cd /var/www/bote-site
npm install --production
npm run build
pm2 start npm --name "bote-site" -- start
pm2 save
```

## Настройка Nginx

Создайте файл `/etc/nginx/sites-available/bote-site`:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
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

Активируйте конфигурацию:

```bash
sudo ln -s /etc/nginx/sites-available/bote-site /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## Переменные окружения

Если нужны переменные окружения, создайте файл `.env.production` на сервере:

```bash
cd /var/www/bote-site
nano .env.production
```

## Полезные команды PM2

- `pm2 list` - список процессов
- `pm2 logs bote-site` - логи приложения
- `pm2 restart bote-site` - перезапуск
- `pm2 stop bote-site` - остановка
- `pm2 delete bote-site` - удаление

## Обновление

Для обновления выполните деплой заново или:

```bash
cd /var/www/bote-site
git pull  # если используете git
npm install
npm run build
pm2 restart bote-site
```



