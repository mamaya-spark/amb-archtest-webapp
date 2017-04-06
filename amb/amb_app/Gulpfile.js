const path = require('path');
const gulp = require('gulp');
const del = require('del');
const webpack2 = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config');

const paths = {
    src: path.join(__dirname, 'src', 'app'),
    dist: path.join(__dirname, 'static')
}

//* ********** *//
//* GULP CLEAN *//
//* ********** *//
gulp.task('clean', function() {
    return del([
        path.join(paths.dist, 'css', '**', '*'),
        path.join(paths.dist, 'js', '**', '*')
    ]);
});

//* ********** *//
//* GULP BUILD *//
//* ********** *//
gulp.task('build', [ 'clean' ], function() {
    return gulp.src(paths.src)
        .pipe(webpackStream(webpackConfig, webpack2))
        .pipe(gulp.dest(paths.dist));
});

//* **** *//
//* GULP *//
//* **** *//
gulp.task('default', [ 'build' ]);

//* ********** *//
//* GULP WATCH *//
//* ********** *//
gulp.task('watch', [ 'build' ], function() {

});
