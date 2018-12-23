import gulp from 'gulp';
import changed from 'gulp-changed';
import filter from 'gulp-filter';
import gulpIf from 'gulp-if';

const {INCLUDE_ROBOTS} = process.env;

gulp.task('copy', () => (
	gulp.src('app/resources/**/*')
		.pipe(changed('dist'))
		.pipe(gulpIf(!INCLUDE_ROBOTS, filter(file => !/resources[\\\/]robots\.txt/.test(file.path))))
		.pipe(gulp.dest('dist'))
));

gulp.task('copy-fonts', () => (
    gulp.src('app/fonts/**/*')
        .pipe(changed('dist/assets/fonts'))
        .pipe(gulpIf(!INCLUDE_ROBOTS, filter(file => !/resources[\\\/]robots\.txt/.test(file.path))))
        .pipe(gulp.dest('dist/assets/fonts'))
));
