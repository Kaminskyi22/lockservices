# LockService - Сайт послуг відкриття замків

## Налаштування середовища

1. Створіть файл `.env.local` на основі `.env.example`
2. Заповніть всі необхідні змінні середовища:
   - Google Analytics ID
   - Meta Pixel ID
   - UptimeRobot API Key
   - Email налаштування
   - Google Search Console verification

## Запуск проекту

```bash
# Встановлення залежностей
npm install

# Запуск в режимі розробки
npm run dev

# Збірка для продакшн
npm run build

# Запуск в продакшн режимі
npm start
```

## Моніторинг та аналітика

1. **Google Analytics**
   - Перейдіть до [Google Analytics](https://analytics.google.com)
   - Створіть новий акаунт та веб-сайт
   - Отримайте ID трекера та додайте його в `.env.local`

2. **Meta Pixel**
   - Перейдіть до [Meta Business Manager](https://business.facebook.com)
   - Створіть новий Pixel
   - Отримайте ID та додайте його в `.env.local`

3. **UptimeRobot**
   - Зареєструйтесь на [UptimeRobot](https://uptimerobot.com)
   - Створіть новий монітор для вашого сайту
   - Отримайте API ключ та додайте його в `.env.local`

## SEO та пошукова оптимізація

1. **Google Search Console**
   - Додайте ваш сайт до [Google Search Console](https://search.google.com/search-console)
   - Підтвердіть власність сайту
   - Додайте sitemap.xml
   - Моніторьте помилки та покращуйте індексацію

2. **Мета-теги**
   - Перевірте та оновіть title та description
   - Додайте Open Graph та Twitter Card теги
   - Налаштуйте canonical URLs

## Форма зворотного зв'язку

1. Налаштуйте email для отримання повідомлень
2. Перевірте роботу форми на різних пристроях
3. Моніторьте відгуки користувачів

## Безпека

1. Регулярно оновлюйте залежності
2. Моніторьте логи на помилки
3. Використовуйте HTTPS
4. Налаштуйте регулярні бекапи

## Підтримка

При виникненні проблем:
1. Перевірте логи
2. Зверніться до розробника
3. Використайте форму зворотного зв'язку

## Ліцензія

MIT

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
