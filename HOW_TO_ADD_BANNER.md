# Как добавить баннер на страницу "Контрактное производство"

## Шаг 1: Загрузите изображение
Положите ваш баннер в:
```
/public/images/contract-manufacturing-hero.jpg
```
или
```
/public/images/contract-manufacturing-hero.png
```

## Шаг 2: Замените код в app/contract-manufacturing/page.tsx

Найдите строку:
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-[#2C3E50] via-[#34495E] to-[#2C3E50]">
```

Замените на:
```tsx
<div className="absolute inset-0">
  <Image
    src="/images/contract-manufacturing-hero.jpg"
    alt="Контрактное производство косметики"
    fill
    className="object-cover"
    sizes="100vw"
    priority
  />
</div>
```

## Шаг 3: Добавьте импорт Image в начало файла
```tsx
import Image from "next/image";
```

## Готово!
Баннер будет отображаться на весь экран с адаптивностью.


