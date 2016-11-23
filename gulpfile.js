// include gulp
var gulp = require('gulp');

// include plug-ins
var autoprefix = require('gulp-autoprefixer');
var clean = require('gulp-clean');
var compass = require('gulp-compass');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var minifyCSS = require('gulp-minify-css');
var modernizr = require('gulp-modernizr');
var nodemon = require('gulp-nodemon');
var nunjucksRender = require('gulp-nunjucks-render');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var data = require('gulp-data');

// Paths
var paths = {
    sass: ['app/assets/scss/*.scss'],
    sasswatch: ['app/assets/scss/global/*.scss', 'app/modules/**/*.scss'],
    scripts: ['app/app.js',
        'app/modules/**/*.js'
    ],
    styles: [
        'app/components/swipebox/css/swipebox.css'
    ],
    libs: [
        'app/components/bootstrap-sass/javascripts/bootstrap.js',
        'app/components/jquery.easing/js/jquery.easing.js',
        'app/components/jquery.js',
        'app/components/swipebox/js/jquery.swipebox.js'
    ]
};

// Add Modernizer

// gulp.task('modernizr', function () {
//     gulp.src('./app/build/scripts/app.js')
//         .pipe(modernizr('modernizr-custom.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('./app/build/scripts'));
// });

// JS hint Task 
gulp.task('app-scripts-jshint', function() {
    gulp.src(paths.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// SASS Compile with Source Maps

gulp.task('sass-compile-livereload', function() {
    return gulp.src(paths.sass)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./app/build/css'))
        .pipe(connect.reload());
});

// Javascript App bundle concatenate

gulp.task('app-scripts-concat-livereload', function() {
    return gulp.src(paths.scripts)
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./app/build/js/'))
        .pipe(connect.reload());
});

// Javascript Vendor bundle concatenate

gulp.task('vendor-scripts-concat-livereload', function() {
    return gulp.src(paths.libs)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./app/build/js/'))
        .pipe(connect.reload());
});

// Javascript App bundle concat, strip debugging and minify

gulp.task('app-scripts-prod-livereload', function() {
    gulp.src(paths.scripts)
        .pipe(concat('main.min.js'))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest('./app/build/js/'))
        .pipe(connect.reload());
});

// App CSS concat, auto-prefix and minify

gulp.task('app-styles-prod-livereload', function() {
    gulp.src(['./app/build/css/styles.css'])
        .pipe(concat('styles.min.css'))
        .pipe(autoprefix('last 2 versions'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./app/build/css/'))
        .pipe(connect.reload());
});

gulp.task('vendor-styles-prod-livereload', function() {
    gulp.src(paths.styles)
        .pipe(concat('vendor.css'))
        .pipe(autoprefix('last 2 versions'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./app/build/css/'))
        .pipe(connect.reload());
});

// Nunjucks Templating

gulp.task('nunjucks', function() {
    // Gets .html and .nunjucks files in pages
    return gulp.src('./*.tpl')
        // Renders template with nunjucks
        .pipe(nunjucksRender())
        // output files in app folder
        .pipe(gulp.dest('./'));
});

gulp.task('nunjucks', function() {
    return gulp.src('./*.tpl')
        // Adding data to Nunjucks
        .pipe(data(function() {
            return require('./app/modules/wedding-photos/wedding-photos.json')
        }))
        .pipe(nunjucksRender())

    .pipe(gulp.dest('./'));
});

// Local webserver

gulp.task('server', function() {
    nodemon({
        script: 'server.js',
        ext: 'js html',
        env: {
            'NODE_ENV': 'development'
        }
    });
});

// Local webserver and livereload

gulp.task('webserver-livereload', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('default', [
    'app-scripts-jshint',
    'sass-compile-livereload',
    'app-scripts-concat-livereload',
    'vendor-scripts-concat-livereload',
    'app-scripts-prod-livereload',
    'app-styles-prod-livereload',
    'vendor-styles-prod-livereload',
    'nunjucks',
    'webserver-livereload'
], function() {
    gulp.watch(paths.scripts, ['app-scripts-jshint']);
    gulp.watch(paths.sasswatch, ['sass-compile-livereload']);
    gulp.watch(paths.scripts, ['app-scripts-concat-livereload']);
    gulp.watch(paths.libs, ['vendor-scripts-concat-livereload']);
    gulp.watch(paths.scripts, ['app-scripts-prod-livereload']);
    gulp.watch('./assets/css/*.css', ['app-styles-prod-livereload']);
    gulp.watch(paths.styles, ['vendor-styles-prod-livereload']);
    gulp.watch('app/modules/**/*.tpl', ['nunjucks']);

});