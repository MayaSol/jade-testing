import gulp from 'gulp';
import changed from 'gulp-changed';
import filter from 'gulp-filter';
import gulpIf from 'gulp-if';

const {INCLUDE_ROBOTS} = process.env;

gulp.task('copyimg', () => (
	gulp.src('app/images/**/*')
		.pipe(changed('dist/assets/images'))
		.pipe(gulpIf(!INCLUDE_ROBOTS, filter(file => !/resources[\\\/]robots\.txt/.test(file.path))))
		.pipe(gulp.dest('dist/assets/images'))
));
