/**
 * Created by xubaoshi on 2015/12/22.
 */
var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");
var minifycss = require("gulp-minify-css");
var rev = require("gulp-rev");
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");

gulp.task("css", function () {
    return gulp.src("project/js/to-do-list/css/*.css")
        .pipe(autoprefixer({
            browers: ["last 2 versions"],
            cascade: true,
            remove: true
        }))
        .pipe(gulp.dest("project/js/to-do-list/min/css"))
        .pipe(minifycss())
        .pipe(gulp.dest("project/js/to-do-list/min/css"))
});

gulp.task("hash", function () {
    return gulp.src("project/js/to-do-list/css/*.css")
        .pipe(gulp.dest("project/js/to-do-list/assets/css"))
        .pipe(rev())
        .pipe(gulp.dest("project/js/to-do-list/assets/css"))
        .pipe(rev.manifest())
        .pipe(gulp.dest("project/js/to-do-list/assets/css"))
});

gulp.task("hashMap", function () {
    return gulp.src("project/js/to-do-list/css/*.css")
        .pipe(sourcemaps.init())
        .pipe(concat({path: 'bundle.css', cwd: ''}))
        .pipe(rev())
        .pipe(gulp.dest("project/js/to-do-list/assets/css"))
        .pipe(rev.manifest('assets.json'))
        .pipe(gulp.dest("project/js/to-do-list/assets/css"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("project/js/to-do-list/assets/css"))
});

