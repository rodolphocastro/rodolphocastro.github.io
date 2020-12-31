# rodolphocastro.github.io

This repository holds the source for my personal "curriculum" written in Vue + Typescript.  

## Project setup

First and foremost ensure you have a version of `npm` installed on your environment.

Then, to install all the required dependencies, run the following command on your terminal of choice.

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Lints and fixes files
```
npm run lint
```

### Test PWA mode

Ensure you have `http-server-spa` server installed, if not then run `npm install -g http-server-spa`.

Execute the build process (`npm run build`) and then run `http-server-spa dist/` to serve the App as a PWA.

### Update icons for PWA

Use the package `vue-pwa-asset-generator` to scaffold or update icons when needed.

`npx vue-pwa-asset-generator -a {512x512 png or SVG file} -o public/img/icons/`