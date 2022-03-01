# Gulp WordPress boilerplate project

## Install

1. Click on [Use this template](https://github.com/petersonby/gulp-wordpress/generate) button.
2. Download and install [the latest WordPress](https://wordpress.org/download/).
3. Navigate to `themes` folder.
4. Download the template to this folder.
5. Run `npm install` and `npm run build`.
6. Open WordPress Dashboard - Appearance - Themes.
7. Activate Gulp-WP theme.

## Usage

Change project `name` in [package.json](https://github.com/petersonby/gulp-wordpress/blob/master/package.json) file:
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
  * `gulp` or `gulp default` – default task: builds assets, starts watching directories for changes and reload browser
  * `gulp build` – rebuilds all assets
  * `gulp watcher` – starts watching directories for changes
  * `gulp serve` – run browsersync server with live reload
  * `gulp clean` – delete build folder
  * `gulp styles` – styles compilation (includes: concat, minify, sourcemaps, autoprefixer)
  * `gulp scripts` – scripts compilation (includes: concat, uglify, sourcemaps, babel)
  * `gulp lint` – lint scripts with eslint
  * `gulp svgSprites` – create svgSprite (includes: concat, minify)
#### 2. PHP
  Basic WordPress templates
#### 3. SCSS
  Basic styles
#### 4. JS
  Includes: Polyfill for 'forEach', Animated scroll to anchors, mobile burger menu
