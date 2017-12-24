const gulp  = require('gulp'),
      watch = require('gulp-watch'),
      pug   = require('gulp-pug'),
      sourcemaps = require('gulp-sourcemaps'),
      sass  = require('gulp-sass'),
      plumber = require('gulp-plumber'); //для того чтобы не крашился watch.


gulp.task('sass', function () {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('pug', function() {
  return gulp.src(["./src/pug/**/*.pug", '!./src/pug/**/_*.pug'])
    .pipe(plumber())
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest("./build"));
});

gulp.task('watch', function() {
  gulp.watch('./src/pug/**/*.pug', ['pug']);
  gulp.watch('./src/styles/**/*.scss', ['sass']);
});