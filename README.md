# Pet Adoption Center

A pet adoption center showcasing locale-aware number, currency, date, and pluralization formatting with General Translation.

**[Live Demo](https://pet-adoption.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example app simulates a pet adoption center where users can browse adoptable pets with detailed profiles. It demonstrates how GT handles locale-aware formatting for currencies, numbers, dates, plurals, and conditional text — all translated across multiple languages.

## GT Features Used

- `<T>` — JSX translation
- `<Currency>` — Locale-aware currency formatting
- `<Num>` — Number formatting
- `<DateTime>` — Date/time formatting
- `<Plural>` — Pluralization
- `<Branch>` — Conditional rendering by locale
- `<LocaleSelector>` — Language picker
- `getGT` — Server-side string translations
- `tx` — Server-side runtime translation for dynamic content
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/pet-adoption.git
cd pet-adoption
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
