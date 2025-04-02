const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle:'compressed' }))
        .pipe(gulp.dest('./dist/css')); // Esse código executado cria uma pasta dist e um arquivo "main.css"\\
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images')); // Esse código executado ele cria a minificação das imagens"\\
}

exports.default = gulp.parallel(styles, images);

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}

