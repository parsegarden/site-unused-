// --------------------
// #GULP
// --------------------



// Configure paths
var config = {
    htmlpath:   './public',
    jadePath:   './source',
    sassPath:   './source/assets/scss',
    bowerDir:   './bower_components',
    bourbonDir: './bower_components/bourbon/app/assets/stylesheets',
    neatDir:    './bower_components/neat/app/assets/stylesheets',
}





// Include plug-ins
var gulp        = require('gulp'),
    jshint      = require('gulp-jshint'),
    gutil       = require('gulp-util'),
    sourcemaps  = require('gulp-sourcemaps'),
    sass        = require('gulp-sass'),
    notify      = require("gulp-notify"),
    bower       = require('gulp-bower'),
    jade        = require('gulp-jade'),
//    uncss       = require('gulp-uncss'),
    browserSync = require('browser-sync').create();





// Start Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./public",
            directory: true
        },
        
        files: ["*/**/*.css", "*/**/*.html", "*/**/*.js"]
    });
});





// Convert SASS TO CSS
gulp.task('build-css', function() {
    return gulp.src(config.sassPath + '/**/*.scss')
    
    .pipe(sourcemaps.init())  // Process the original sources
        
    .pipe(sass({
            includePaths: [config.bourbonDir, config.neatDir]
        })
        
        .on("error", notify.onError(function (error) {
            return "Error: " + error.message;
        }))
    )
    
    .pipe(sourcemaps.write()) // Add the map to modified source.
    
    .pipe(gulp.dest('./public/assets/css'))
    
    .pipe(browserSync.stream());
});




// Convert SASS TO CSS
gulp.task('build-prod-css', function() {
    return gulp.src(config.sassPath + '/**/*.scss')
        
    .pipe(sass({
            includePaths: [config.bourbonDir, config.neatDir]
        })
        
        .on("error", notify.onError(function (error) {
            return "Error: " + error.message;
        }))
    )
    
    .pipe(sass({outputStyle: 'compressed'}))
      
    .pipe(gulp.dest('./public/assets/css'))
    
    .pipe(browserSync.stream());
});





// JADE TO HTML – build .jade to .html
gulp.task('build-html', function() {
    gulp.src(config.jadePath  + '/**/*.jade')
    .pipe(jade({
            pretty: true,
            locals: {imagePath: 'assets/i'}
        })
    
        .on("error", notify.onError(function (error) {
            return "Error: " + error.message;
        }))
    )

    .pipe(gulp.dest('./public'))
});





// Watch changes to the file
gulp.task('watch', function() {
    gulp.watch('source/javascript/**/*.js', ['jshint']);
    gulp.watch(config.sassPath + '/**/*.scss', ['build-css']);
    gulp.watch(config.jadePath + '/**/*.jade', ['build-html']);
    gulp.watch(config.jadePath + '/**/*.html', ['build-html']);
    gulp.watch("./public/**/*.html").on('change', browserSync.reload);
});



// create a default task and just log a message
gulp.task('default', ['build-css', 'build-html', 'watch', 'browser-sync'], function() {
    return gutil.log('Gulp is running in Development mode!');
});
  
  
  
// create a task which compiles everything and compresses CSS for production
gulp.task('prod', ['build-prod-css', 'build-html', 'watch', 'browser-sync'], function() {
    return gutil.log('Gulp is running in Production mode!');
});