var gulp 		= require( 'gulp' );
var watch 		= require( 'gulp-watch' );
var sass 		= require( 'gulp-sass' );
var sourcemaps 	= require( 'gulp-sourcemaps' );
var rename 		= require("gulp-rename");
var concat 		= require("gulp-concat");

// SASS
gulp.task( 'sass', function() {
	gulp.src( 'assets/sass/style.scss' )
	.pipe( sourcemaps.init())
	.pipe( sass.sync().on('error', sass.logError) )
	.pipe( sourcemaps.write( './assets/maps' ) )
    .pipe( gulp.dest( 'dist' ) )
} );

//JavaScript
var jsFiles = [
	'assets/js/jquery.validate.min.js',
	'assets/js/additional-methods.min.js',
	'assets/js/script.js'
];
gulp.task( 'javascript', function() {
	gulp.src( jsFiles )
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('dist'))
} );

// Default
gulp.task( 'default', ['sass', 'javascript' ] );

// Watch
gulp.task('watch', function() {
    gulp.watch( 'assets/sass/**/*.scss', ['sass'] );
    gulp.watch( jsFiles, ['javascript'] );
    gulp.watch( 'assets/sass/style.scss', ['sass'] );
} );
