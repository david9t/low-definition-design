import gulp from 'gulp'; // ES6 imports!
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';

gulp.task('css', function() {
	gulp.src('src/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'})
			.on('error', sass.logError))
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./assets/css/'))
});

//Watch task
gulp.task('default', ['css'], function() {
	gulp.watch('src/scss/**/*.scss', ['css']);
});