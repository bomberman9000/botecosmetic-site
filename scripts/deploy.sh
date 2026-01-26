#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/var/www/bote-site"
PM2_NAME="bote-site"
PORT="3001"
BASE_URL="http://localhost:${PORT}"

echo "→ cd ${APP_DIR}"
cd "${APP_DIR}"

echo "→ Очистка .next"
rm -rf .next

echo "→ Build (NODE_OPTIONS max_old_space_size=4096)"
export NODE_OPTIONS="--max_old_space_size=4096"
npm run build 2>&1 | tee /tmp/bote-build.log

echo "→ PM2 restart: ${PM2_NAME}"
pm2 restart "${PM2_NAME}"

echo "→ Ждём запуск..."
sleep 2

check() {
  local url="$1"
  local name="$2"
  local code
  code=$(curl --max-time 5 -s -o /dev/null -w "%{http_code}" "${url}" || echo "000")
  if [[ "${code}" != "200" ]]; then
    echo "✗ ${name} FAIL (${code}) → ${url}"
    echo "--- last pm2 logs ---"
    pm2 logs "${PM2_NAME}" --lines 40 --nostream || true
    echo "--- last build log ---"
    tail -80 /tmp/bote-build.log || true
    exit 1
  fi
  echo "✓ ${name}: ${code}"
}

echo "--- Проверка сайта ---"
check "${BASE_URL}/" "Homepage"
check "${BASE_URL}/result?x=1" "Result page"
check "${BASE_URL}/images/hero-desktop.png" "Hero desktop"
check "${BASE_URL}/images/hero-mobile.png" "Hero mobile"

echo "✨ DEPLOY OK: build + restart + checks passed"
