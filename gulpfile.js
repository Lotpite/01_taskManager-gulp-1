const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = reuqire('gulp-sass')(reuqire('sass')); // компилятор sass

// static server

gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  });
});

gulp.task('styles', function() {
  return gulp.src("src/sass/*.+(sass|scss)") // взяли файлы отсюда
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) // скомпилировали 
    .pipe(gulp.dest("src/css")) // положили файлы сюда
    .pipe(browserSync.stream()); // перезагрузим браузер
})
