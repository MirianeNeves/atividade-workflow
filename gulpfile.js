var gulp = require("gulp");
var minifycss = require("gulp-csso");
var minifyhtml = require("gulp-htmlmin")

gulp.task('scss', function(){
	return gulp.src('./source/scss/*.scss')
	.pipe(minifycss())
	.pipe(gulp.dest('./dist/css'))
});

gulp.task('html', function(){
	return gulp.src('./source/index.html')
	.pipe(minifyhtml())
	.pipe(gulp.dest('./dist'))
});

gulp.task('background',function(){
	gulp.watch('./source/scss/*.scss',['scss']);
	gulp.watch('./source/index.html',['html']);

})