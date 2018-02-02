var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('pug', function(){
  gulp.src('pug/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('public/'));
})

gulp.task('sass', function(){
  gulp.src('sass/*.sass')
  .pipe(sass())
  .pipe(gulp.dest('public/css/'));
})

gulp.task('browser-sync', ['sass', 'pug'], function(){
  browserSync.init({
    server: './public/'
  });

  gulp.watch("sass/*.sass", ['sass']);
  gulp.watch("pug/*.pug", ['pug']);
  gulp.watch("public/*.html").on('change', browserSync.reload);
  gulp.watch("public/*.css").on('change', browserSync.reload);
})

gulp.task('default', ['browser-sync'])
