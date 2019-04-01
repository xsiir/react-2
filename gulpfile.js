const { src, dest, task, watch } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const cssbeautify = require('gulp-cssbeautify');
const autoprefixer = require('gulp-autoprefixer');

var wwwrootPath = './dist/';
const stylesPath = './styles/';

async function buildStyles() {
    await src(stylesPath + 'sass/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssbeautify())
        .pipe(dest(stylesPath + 'css/'))
        .pipe(concat('styles.css'))
        .pipe(dest(wwwrootPath + '/css/'))
        .pipe(concat('styles.css'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(dest(wwwrootPath + '/css/'));
}

async function prepareLibs() {
    var jsLibsDestionation = wwwrootPath + 'lib/js/';
    var cssLibsDestination = wwwrootPath + 'lib/css/';

    var jsPaths = [
        "./node_modules/bootstrap/dist/js/bootstrap.min.js",
        "./node_modules/jquery/dist/jquery.min.js"
    ];
    var cssPaths = [
        "./node_modules/bootstrap/dist/css/bootstrap.min.css"
    ];

    //move js
    for (let index = 0; index < jsPaths.length; index++) {
        const element = jsPaths[index];
        await src(element).pipe(dest(jsLibsDestionation));
    }

    //move css
    for (let index = 0; index < cssPaths.length; index++) {
        const element = cssPaths[index];
        await src(element).pipe(dest(cssLibsDestination));
    }
}

async function watchStyles() {
    await watch(stylesPath + 'sass/**/*.scss', buildStyles);
}

task('prepare-libs', prepareLibs);
task('build-styles', buildStyles);
task('watch', watchStyles);