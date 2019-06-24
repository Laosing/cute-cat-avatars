import gulp from 'gulp';
import sass from 'gulp-sass';
import babel from 'gulp-babel';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
// import browserSync from 'browser-sync';
// const server = browserSync.create();

const paths = {
  styles: {
    src: 'assets/src/scss/**/*.{sass,scss}',
    dest: 'assets/dist/css/'
  },
  scripts: {
    src: ['assets/src/js/**/*.js'],
    dest: 'assets/dist/js/'
  }
};

/*
 * For small tasks you can export arrow functions
 */
// export const clean = () => del([ 'assets' ]);

/*
 * You can also declare named functions and export them as tasks
 */
export function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer( 'last 4 version' ))
    // .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest));
}

export function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    // .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest));
}

 /*
  * You could even use `export as` to rename exported tasks
  */
function watchFiles() {
  gulp.watch(paths.scripts.src, gulp.series(scripts));
  gulp.watch(paths.styles.src, gulp.series(styles));
}

const dev = gulp.series(watchFiles);
export { dev as watch };

// function reload(done) {
//   server.reload();
//   done();
// }

// function serve(done) {
//   server.init({
//     server: {
//       baseDir: './'
//     }
//   });
//   done();
// }


const build = gulp.series(gulp.parallel(styles, scripts));
/*
 * Export a default task
 */
export default build;