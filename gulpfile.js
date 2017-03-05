var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  child_process = require('child_process'),
  mock_data = require('./server/mock_data');


gulp.task('develop', ['mongod'], function () {
  livereload.listen();
  nodemon({
    script: 'server/bin/www',
    ext: 'js ejs coffee',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', [
  'develop'
]);

/* Spawns a separate process to start the mongoDB daemon */
gulp.task('mongod', function(done) {
  child_process.exec('mongod', function (err, stdout, stderr) {});
  done();
});

gulp.task('mockdata', mock_data.mockdata());