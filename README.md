# Dhananjay Tupe — Portfolio

A single-page portfolio built with plain HTML, CSS and JavaScript (no build step,
no frameworks) themed around a security engagement report — terminal panels,
a boot sequence, and project write-ups presented as VAPT-style reports.

```
index.html      → structure
css/style.css   → all styling / design system
js/script.js    → content data + interactions (EDIT THIS for your real links)
assets/         → put your résumé PDF here
```

## 1. Before you deploy — 3 things to edit

Open **`js/script.js`** and update the `PROFILE` object at the top:

```js
const PROFILE = {
  linkedin: "https://www.linkedin.com/in/your-real-handle",
  github:   "https://github.com/Djay-ui",
  medium:   "https://medium.com/@your-real-handle",
};
```

Also in `js/script.js`, the `REPORTS` array has a `link` field for the
"DevSecOps Pipeline Security — Netflix Clone" project — paste your published
Medium article URL there so the "Read the write-up" link works.

Then drop your résumé PDF into `assets/` and name it exactly
`Dhananjay_Tupe_Resume.pdf` (or update the `href` in the hero's
"Download résumé" button in `index.html` if you name it differently).

## 2. Preview it locally (optional)

Any static file server works, e.g. with Python installed:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## 3. Deploy it for free — GitHub Pages (recommended, easiest)

This is the simplest option since your code is already on GitHub, and it gives
you a stable public link anyone can open — no account needed to view it.

1. Push these files to your `profile_portfolio-` repo (root of the repo, or a
   `docs/` folder — see step 4 for the `docs/` option).
2. On GitHub, go to your repo → **Settings** → **Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose `main` and folder `/ (root)` (or `/docs` if you
   used that folder), then **Save**.
5. Wait ~1 minute. GitHub shows your live URL at the top of the Pages
   settings page, in the form:

   ```
   https://djay-ui.github.io/profile_portfolio-/
   ```

That link is public and free forever, updates automatically every time you
push to the branch, and needs no server or hosting bill.

## 4. Alternative: Netlify or Vercel (also free, slightly nicer URLs)

Both let you connect your GitHub repo directly and auto-deploy on every push,
and both offer a free custom subdomain (e.g. `dhananjay-tupe.vercel.app`).

**Netlify:** netlify.com → *Add new site → Import an existing project* → pick
your GitHub repo → leave build command empty, publish directory `/` → Deploy.

**Vercel:** vercel.com → *Add New → Project* → import the repo → Framework
Preset: "Other" → Deploy.

Either finishes in under two minutes and gives you a link to put straight
into your LinkedIn "Featured" section or profile URL field.

## 5. Put the link on LinkedIn

Once deployed, add the URL under **Profile → Featured** (as a link) and/or in
your headline's "Contact info" website field, so it's visible to anyone
viewing your profile.
