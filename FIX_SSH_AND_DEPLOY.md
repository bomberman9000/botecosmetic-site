# Проблема: SSH заблокирован после включения UFW

## Что произошло
Когда вы включили UFW (`ufw enable`), файрвол заблокировал SSH, потому что правило было добавлено, но UFW может блокировать соединения до применения правил.

## Решение

### Вариант 1: Через веб-консоль (если доступна)

1. Зайдите в панель управления VPS
2. Откройте "Web SSH" или "Консоль"
3. Выполните команды:

```bash
# Проверяем статус UFW
ufw status

# Убеждаемся, что правило для SSH есть
ufw allow 22/tcp

# Если SSH все еще заблокирован, можно временно отключить UFW
ufw disable

# Или добавить правило с приоритетом
ufw allow 22/tcp comment 'SSH'
ufw enable
```

### Вариант 2: Если у вас еще открыта SSH сессия

Если вы еще подключены к серверу (не вышли из SSH), выполните на сервере:

```bash
# Убедимся, что SSH правило работает
ufw delete allow 22/tcp
ufw allow 22/tcp

# Проверяем правила
ufw status numbered

# Перезагружаем UFW (осторожно - может разорвать соединение!)
# Лучше просто проверить статус
ufw status verbose
```

### Вариант 3: Использовать панель управления для загрузки архива

1. Зайдите в панель управления VPS
2. Найдите "Файловый менеджер"
3. Загрузите `deploy.tar.gz` в `/tmp/`
4. Используйте Web SSH для выполнения команд

### Вариант 4: Временное отключение UFW (через панель)

Если есть доступ через панель:

1. Через Web SSH выполните:
```bash
ufw disable
```

2. Затем подключитесь через обычный SSH и загрузите архив

3. После деплоя включите UFW снова:
```bash
ufw allow 22/tcp
ufw allow 3001/tcp
ufw enable
```

## После исправления SSH

Как только SSH заработает, выполните:

**На Mac:**
```bash
cd /Users/mac/.cursor/worktrees/1/vbg/bote-site
scp deploy.tar.gz root@144.31.64.130:/tmp/
```

**На сервере:**
```bash
mkdir -p /var/www/bote-site
cd /var/www/bote-site
tar -xzf /tmp/deploy.tar.gz
rm /tmp/deploy.tar.gz
npm install
npm run build
pm2 delete bote-site 2>/dev/null || true
pm2 start npm --name "bote-site" -- start
pm2 save
pm2 list
```



