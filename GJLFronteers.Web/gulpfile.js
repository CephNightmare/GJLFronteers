var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var flatten = require('gulp-flatten');

var watchers = {
    scss: ['./scss/**/*.scss'],
    js: ['./js/**/*.js']
};

var paths = {
    node: ['./node_modules/'],
    bower: ['./bower_components/'],
    dist: ['./dist/'],
    img: ['./src/assets/img/'],
    fonts: ['./src/assets/fonts/'],
    js: ['./src/assets/js/']
};

gulp.task('images', function() {

    gulp
        .src([
            paths.img+'**/*'
        ])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(paths.dist+'img'));

});

gulp.task('fonts', function() {

    gulp.src( paths.fonts+'**/*')
        .pipe(flatten())
        .pipe(gulp.dest(paths.dist+'fonts'));

});

gulp.task('js', function(done) {

    gulp
        .src([
            paths.node + 'three/build/three.js'
        ])
        .pipe(concat('vendors.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist+'js'))
        .on('end', done);
});

gulp.task('watch', function() {

    gulp.watch(watchers.scss, ['scss']);
    gulp.watch(watchers.js, ['js']);

});

gulp.task('install', ['images', 'fonts', 'scss', 'js']);
gulp.task('default', ['scss', 'js']);