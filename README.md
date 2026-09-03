# For Shagufta Hamid Ma'am — A Teacher's Day Website

An interactive storybook-style Teacher's Day website built with Next.js, TypeScript, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Adding background music

Drop an instrumental audio file at:

```
public/audio/teacher-day.mp3
```

Soft lo-fi / calm piano / nostalgic study-music style works best. The site works perfectly without it too — the music button will just show as unavailable.

## What's inside

- `app/` — Next.js app router entry (layout, global styles, the single page)
- `components/` — every chapter/section of the story, plus shared bits:
  - `SiteContext.tsx` — shared state (has the story begun, is music playing, which hidden words have been found)
  - `data.ts` — all of the site's written content in one place, easy to edit
  - `Opening.tsx`, `Hero.tsx`, `Letter.tsx`, `MoreThanEnglish.tsx`, `Classroom.tsx`, `SecretBook.tsx`, `Awards.tsx`, `PaperWall.tsx`, `BookCover.tsx`, `FinalPage.tsx`, `EasterEgg.tsx` — the chapters and surprises, top to bottom
  - `Navigation.tsx`, `MusicPlayer.tsx` — floating UI

## Editing the content

Almost everything text-based lives in `components/data.ts` and `components/Opening.tsx` / `components/Hero.tsx` / `components/FinalPage.tsx` (for the pieces written directly into their sections). Change the strings there and the site updates everywhere that content is used.
