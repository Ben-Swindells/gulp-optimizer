var gulp = require('gulp');
const { watch } = require('gulp');
cssbeautify = require('gulp-cssbeautify');
let cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');

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
gulp.task('imageMin', () =>
    gulp.src('components/images/*')
        .pipe(imagemin())
        .pipe(imagemin([
          imagemin.gifsicle({interlaced: true}),
          imagemin.jpegtran({progressive: true}),
          imagemin.optipng({optimizationLevel: 5}),
          imagemin.svgo({
              plugins: [
                  {removeViewBox: true},
                  {cleanupIDs: false}
              ]
          })
      ]))
        .pipe(gulp.dest('components/images-compressed'))
);

  gulp.task('watch' , function(){
    watch('components/scss/styles.scss', gulp.series('sass')); 
    // Other watchers
  })