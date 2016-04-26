var gulp = require("gulp"),
    concat = require("gulp-concat"),
    rename = require('gulp-rename'),
    uglify = require("gulp-uglify"),
    filter = require('gulp-filter'),
    gulpFilter = require('gulp-filter'),
    bower = require('main-bower-files');

gulp.task('copy:bower:css', function() {
  var f = filter('**/*.css', {restore: true})

  return gulp.src(bower({
    paths: {
      bowerJson: 'bower.json'
    }
  }))
    .pipe(f)
    .pipe(gulp.dest('static/css/'))
    .pipe(f.restore)
})

gulp.task('copy:bower:js', function() {
  var f = filter('**/*.js', {restore: true})

  return gulp.src(bower({
    paths: {
      bowerJson: 'bower.json'
    }
  }))
    .pipe(f)
    .pipe(gulp.dest('static/js/'))
    .pipe(f.restore)
})

gulp.task('compile:lib', function() {
  var f = filter('**/*.js', {restore: true})

  return gulp.src(bower({
    paths: {
      bowerJson: 'bower.json'
    }
  }))
    .pipe(f)
    .pipe(concat('lib.js'))
    .pipe(uglify({
      preserveComments: 'some'
    }))
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest('static/js/'))
    .pipe(f.restore)
})
