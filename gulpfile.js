var gulp=require('gulp');
var autoprefixer=require('gulp-autoprefixer');
gulp.task('styles',async function(){
gulp.src('./style.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
});

gulp.task('watch',function(){
    gulp.watch('./style.css',gulp.series('styles'))
})