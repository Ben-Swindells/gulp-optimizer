var gulp = require('gulp');
const { watch } = require('gulp');
cssbeautify = require('gulp-cssbeautify');
let cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('components/scss/styles.scss') // Get source files with gulp.src
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(gulp.dest('components/css')) // Outputs the file in the destination folder
  })

gulp.task('clean', function() {
    return gulp.src('components/scss/styles.scss')
        .pipe(cssbeautify())
        .pipe(gulp.dest('components/cleaned-css'));
});

  gulp.task('watch' , function(){
    watch('components/scss/styles.scss', gulp.series('sass')); 
    // Other watchers
  })