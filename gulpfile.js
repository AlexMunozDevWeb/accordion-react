const gulp = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

const paths = {
  styles: {
    src: 'src/styles/style.less', // Ruta de tus archivos Less
    dest: 'src/styles' // Ruta de destino para los archivos CSS compilados
  }
};

function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.styles.dest));
}

function watch() {
  gulp.watch(paths.styles.src, styles);
}

exports.styles = styles;
exports.watch = watch;

// Tarea por defecto para ejecutar 'gulp watch'
exports.default = gulp.series(styles, watch);