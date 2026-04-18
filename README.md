# Bloom Fest 2026 — Landing Page

Promotional one-page website for Bloom Fest 2026. Photography-first design, built in plain HTML/CSS/JS. No build step.

## Contents

```
index.html      – full page markup
styles.css      – all styling
script.js       – scroll reveals, sticky nav behaviour
images/         – 13 photos from the festival press kit
```

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Upload the entire project (including the `images/` folder) to the repository root.
3. Settings → Pages → Source: Deploy from a branch → `main` / `root` → Save.
4. Your site will be live at `https://<username>.github.io/<repo>/` in about a minute.

## Local preview

```
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Editing

- Text content lives in `index.html`.
- Design tokens (colours, fonts) are CSS variables at the top of `styles.css` under `:root`.
- To swap photos, replace files in `images/` keeping the same filenames.
