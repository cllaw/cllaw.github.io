# Chuan Law's Website

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

The `.github/workflows/static.yml` file will pick up changes and deploy to hosted site via Github Actions.

---

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
