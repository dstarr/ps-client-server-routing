const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('default', launchServer);

function launchServer() {

  var restart_called = false;

  var nm = nodemon({

    script: 'server.js',
    ext: 'js html css',
    env: {
      'NODE_ENV': 'development'
    },
    ignore: [
        './node_modules/**',
        './tests/**',
        'bundle.js']
  });

  // this subscribes to nodemon's restart event
  nm.on('restart', function () {
    restart_called = true;
  });

  // this function listens for nodemon's exit event so 
  // we can FULLY clean up the Node.js running application
  // so nodemon doesn't leave Node.js running in memory
  nm.on('exit', function () {

    if (!restart_called) {
      console.log("KILLING NODEMON PROCESS ID:" + process.pid);
      process.kill(process.pid);
      return;
    }

    restart_called = false;
  });
}
