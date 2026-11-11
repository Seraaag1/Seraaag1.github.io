# Ahmed Serag Eldin — Portfolio

Pure HTML / CSS / JavaScript. No build step, no dependencies.
Dark + light theme, Arabic (RTL) + English, responsive from phone to desktop.

## Publish on GitHub Pages
1. Create a **public** repo named exactly `Seraaag1.github.io`
2. Upload everything in this folder (keep the folder structure)
3. Repo → Settings → Pages → Source: `Deploy from a branch` → Branch: `main` / `(root)` → Save
4. After ~1 minute the site is live at https://Seraaag1.github.io

## Edit content
Everything lives at the top of `js/main.js` (PROJECTS, SKILLS, EXPERIENCE, EDUCATION, CERTS, ROLES, I18N).
Each text is `{ en: '...', ar: '...' }`.

## Images
All files are in the root (no folders) so they can be uploaded with GitHub "Upload files".
For the Mostaql projects the site falls back to the images hosted on Mostaql. For a faster, safer site,
save them into `assets/` with these names (PNG): `amazon-1..4`, `churn-1`, `sales-1..4`, `covid-1`, `titanic-1`.

## Files
- `index.html` – structure
- `css/style.css` – design tokens, light/dark, responsive
- `js/main.js` – content + particles, typing, tilt, lightbox, i18n, theme
- `assets/` – screenshots + CV (`Ahmed_Serag_Eldin_CV.pdf`)
