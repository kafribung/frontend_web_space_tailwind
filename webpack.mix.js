const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
// .js('src/js/app.js', 'dist')
mix.sass('src/scss/app.scss', 'dist')
    .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.config.js') ],
    })