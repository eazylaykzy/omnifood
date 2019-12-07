const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');

/*
var pug = require('gulp-pug');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');*/

// FILE PATH
const SCRIPTS_PATH = 'res/js/**/*.js';
const CSS_PATH = 'res/css/**/*.css';

// Scripts
gulp.task('styles', function(){
    console.log('Start styles task');

    return gulp.src(['res/css/styles.css', CSS_PATH])
        .pipe(plumber(function (err) {
            console.log('Styles Task Error: ' + err);
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('res/build/css'))
});

// Gulp Watch
gulp.task('watch', function(){
    console.log('Start watch task');

    gulp.watch(CSS_PATH, ['styles']);
});

gulp.task('js', function(){
    return gulp.src('client/javascript/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'))
});

gulp.task('default', [ 'html','styles','css', 'js' ]);
