# DEER Lab website

React + TypeScript + Vite website, deployed with GitHub Pages.

## Local development

Requires Node.js 22 and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:3000/deerlab/`).

## Production build

```sh
npm run build
npm run preview
```

The build is written to `dist/`. The default base path is `/deerlab/`.
All public image and video URLs use `import.meta.env.BASE_URL` so they
work under the GitHub Pages repository path. HashRouter keeps subpage
navigation and refreshes working without server rewrite rules.

## GitHub Pages deployment

1. In this repository's **Settings → Pages**, select **GitHub Actions**
   under **Build and deployment → Source**.
2. Push changes to `main`. The **Deploy to GitHub Pages** workflow installs
   dependencies, builds the site, and publishes `dist/`. It can also be
   started from **Actions → Deploy to GitHub Pages → Run workflow**.
3. Check the deployment result in Actions. The default site URL is
   <https://deerlab22030.github.io/deerlab/>.

No Vercel account, API token, or manually managed deployment branch is
required. The workflow uses GitHub's built-in token and Pages environment.
It reads the base path from GitHub Pages settings when building, allowing
custom-domain deployments to use `/` automatically.

If this repository is still connected to Vercel, disconnect its Git
integration in Vercel to stop duplicate deployments. Any existing custom
domain needs its DNS and GitHub Pages custom-domain settings migrated
separately before the old hosting is removed.
