const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require('gulp-uglify');
const stripComments = require('gulp-strip-comments');
const imagemin = require("gulp-imagemin");


function scripts() {
  return gulp
    .src("./src/scripts/*.js")
    .pipe(stripComments())
    .pipe(uglify())         
    .pipe(gulp.dest("./dist/src/js"));
}

function styles() {
  console.log("Compilando o sass...");

  return gulp
    .src("./src/styles/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("./dist/src/styles"));
}

function images() {
  return gulp
    .src("./src/images/**/*", { encoding: false })
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/src/images"));
}

exports.default = gulp.parallel(styles, images, scripts);
exports.watch = () => {
  gulp.watch("./src/styles/*.scss", gulp.parallel(styles));
  gulp.watch("./src/scripts/*.js", gulp.parallel(scripts));
};
