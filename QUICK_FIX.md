# Быстрое исправление - выполните на сервере

## Проблема: PM2 не установлен

Выполните эти команды на сервере по порядку:

```bash
# 1. Установите PM2
npm install -g pm2

# 2. Перейдите в директорию проекта
cd /var/www/bote-site

# 3. Убедитесь что зависимости установлены
npm install --production

# 4. Соберите проект
npm run build

# 5. Запустите приложение через PM2
pm2 start npm --name "bote-site" -- start

# 6. Сохраните конфигурацию
pm2 save

# 7. Настройте автозапуск
pm2 startup
# (Выполните команду, которую покажет pm2 startup)

# 8. Проверьте статус
pm2 list

# 9. Посмотрите логи
pm2 logs bote-site

# 10. Проверьте работу локально
curl http://localhost:3001
```

## Если Node.js не установлен

```bash
# Установите Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get update
apt-get install -y nodejs

# Затем повторите шаги выше
```

## Настройка файрвола

Если используете iptables напрямую:
```bash
iptables -A INPUT -p tcp --dport 3001 -j ACCEPT
iptables-save > /etc/iptables/rules.v4
```

Или установите UFW:
```bash
apt-get install -y ufw
ufw allow 3001/tcp
ufw enable
```

## Проверка

После выполнения команд:

1. **Проверьте статус:**
   ```bash
   pm2 list
   ```
   Должен показать `bote-site` со статусом `online`

2. **Проверьте логи:**
   ```bash
   pm2 logs bote-site
   ```
   Не должно быть критических ошибок

3. **Проверьте порт:**
   ```bash
   netstat -tlnp | grep 3001
   ```
   Должен показывать, что Node.js слушает порт

4. **Проверьте локально:**
   ```bash
   curl http://localhost:3001
   ```
   Должен вернуть HTML страницы

5. **Проверьте извне:**
   Откройте в браузере: `http://144.31.64.130:3001`



