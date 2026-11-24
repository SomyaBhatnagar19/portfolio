# Somya Bhatnagar — Portfolio

A responsive React + Vite personal portfolio designed for desktop, tablet and mobile.

## Requirements
- Node.js 18 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```
The production-ready website is generated in `dist/`.

## Personalise before publishing
1. Open `src/main.jsx`.
2. Update `profile.email`, `profile.github`, and `profile.linkedin`.
3. Replace the sample project entries in `projects` with real projects and their repository/demo URLs.
4. Update the experience description with exact dates, responsibilities and verifiable achievements.
5. Add your PDF resume at `public/resume.pdf` (create the `public` folder if needed).
6. Remove any technologies or claims that do not accurately reflect your experience.

## Deploy
You can deploy the project to Vercel, Netlify or GitHub Pages. For Vercel/Netlify, import the repository and use:
- Build command: `npm run build`
- Output directory: `dist`
