var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
//var concatCss = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  return gulp.src('styles/sass/**/*.scss')
    .pipe(sourcemaps.init())
  //  .pipe(concatCss("styles/bundle.css"))
    .pipe(autoprefixer())
    .pipe(sass({
    outputStyle: 'compressed'
  }).on('error', sass.logError))
    .pipe(plumber())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('styles/css'))
    .pipe(browserSync.stream());
})

gulp.task('watch', ['sass'], function() {

  browserSync.init({
    server: "./"
  });
  gulp.watch("styles/sass/**/*.scss", ['sass']);
  gulp.watch("styles/css/**/*.css", ['sass']);
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['sass, watch']);
