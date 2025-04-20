# Chuan Law's Website

https://chuanlaw.me/

## Local Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

## Production Changes

``` bash
# build for production with minification
npm run build
```

Then commit and push changes to `build.js` and `build.js.map` files in the dist folder to main.

GitHub's Pages infrastructure handles the deployment using the [build-pages-deployment](https://github.com/cllaw/cllaw.github.io/actions/workflows/pages/pages-build-deployment) workflow action (generated when Github pages is enabled for the repo).

---

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

---

### Legacy `.github/workflows/static.yml` file

```yml
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["main"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow one concurrent deployment
concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  # Single deploy job since we're just deploying
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Setup Pages
        uses: actions/configure-pages@v2
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          # Upload entire repository
          path: '.'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1

```

