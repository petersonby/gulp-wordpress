# Gulp WordPress boilerplate project

## Install

Click on [Use this template](https://github.com/petersonby/gulp-wordpress/generate) button.

## Usage

Change project `name` in [package.json](https://github.com/petersonby/gulp-wordpress/package.json) file:
```diff
-  "name": "boilerplate",
+  "name": "project",
```

Start development server:
```
npm start
```
Create production build:
```
npm run build
```

## Includes:
#### 1. Gulp tasks
  * `gulp` or `gulp default` – default task, builds assets, starts watching directories for changes and reload browser
  * `gulp build` – rebuilds all assets
  * `gulp watcher` – starts watching directories for changes
  * `gulp serve` – run browsersync server with auto reload
  * `gulp clean` – delete build folder
  * `gulp styles` – styles compilation (include: concat, minify, sourcemaps, autoprefixer)
  * `gulp scripts` – scripts compilation (include: concat, uglify, sourcemaps, babel)
  * `gulp lint` – lint scripts with eslint
  * `gulp svgSprites` – create svgSprite (include: concat, minify)
  * `gulp assets` – other assets compilation
#### 2. PHP
  Basic WordPress templates
#### 3. SCSS
  Basic styles
#### 4. JS
  Includes: Polyfill for 'forEach', Animated scroll to anchors, mobile burger menu
