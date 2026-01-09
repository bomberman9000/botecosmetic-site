# Проверка деплоя

## Проверьте следующие вещи:

### 1. Проверка статуса приложения на сервере

```bash
ssh root@144.31.64.130
pm2 list
pm2 logs bote-site --lines 50
```

### 2. Проверка порта

```bash
netstat -tlnp | grep 3001
# или
ss -tlnp | grep 3001
```

### 3. Проверка работы через браузер

Откройте в браузере:
- `http://144.31.64.130:3001`

### 4. Проверка файлов

```bash
cd /var/www/bote-site
ls -la
# Должны быть папки: .next, node_modules, app, components и т.д.
```

### 5. Если что-то не работает

**Остановить приложение:**
```bash
pm2 stop bote-site
```

**Перезапустить:**
```bash
pm2 restart bote-site
```

**Пересобрать:**
```bash
cd /var/www/bote-site
npm run build
pm2 restart bote-site
```

**Посмотреть логи:**
```bash
pm2 logs bote-site
```

### 6. Настройка Nginx (опционально)

Если нужно настроить домен, используйте инструкцию из DEPLOY_INSTRUCTIONS.md



