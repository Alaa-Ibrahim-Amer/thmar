# ثمار | Thmar

A small static, Arabic (RTL) reading page for shared reflections ("ثمار"). No build step, no dependencies, no backend.

## Add reflections

Edit `data.js` and add one text string per reflection (use `\n` for a line break). The counts and "x of y" labels update automatically.

## Publish on GitHub Pages

1. Create a public repo and upload all files in this folder to the root (`index.html` must be at the root).
2. Go to **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
3. Turn on **Enforce HTTPS** and enable 2FA on your account.

## Security notes

- A strict Content-Security-Policy is set in `index.html` (only same-origin scripts, styles and images).
- Text is rendered with `textContent`, never `innerHTML`.
- Do not commit secrets: the repo and everything in it is public.
