# Homepage
This project contains the source code of the homepage of Philipp Schöneberg.

# Project structure
```
src/
  frontend/    Contains the html, css, js and assets of the homepage
    html/      Contains HTML files
    css/       Contains Stylesheet files
    js/        Contains JavaScript files
    assets/    Contains Images and Papers
  backend/     Contains FastAPI + SQL backend (not implemented yet)
```
All paths inside the pages are relative, so the pages work both from the source tree and from the deployed site.

# Local preview
Open `src/frontend/html/index.html` in a browser, or serve the frontend and open http://localhost:8000/html/index.html:
```bash
python3 -m http.server 8000 --directory src/frontend
```

# Deployment
Every push to `main` runs `.github/workflows/deploy-pages.yml`. The workflow publishes the site to GitHub Pages, with the pages from `src/frontend/html` at the site root and `css/`, `js/` and `assets/` next to them.
The repository's Pages source has to be set to "GitHub Actions" (Settings → Pages), and the custom domain `philipp-schoeneberg.de` is configured there as well.

# Contributors
- Philipp Schöneberg
