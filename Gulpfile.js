
var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require('browser-sync').create(); //przeglądarka auto
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
//Te dwie paczki sprawią, że gulp watch i gulp-serve nie będzie się wywalał przy każdym błędzie
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');

// npm install browser-sync gulp-autoprefixer gulp-plumber gulp-util --save-dev
gulp.task("sass", function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({
            browsers: ['> 1%'], //największy zakres ['> 1%'] - więcej niż 99% procent przeglądarek
            cascade: false
        }))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

//Move the javascript files into our /src/js folder
gulp.task('js', function() {
    return gulp.src('src/js/*.js')
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch(['src/scss/**/*.scss'], ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Default task run on gulp comand
gulp.task('default', ['js','serve']);
