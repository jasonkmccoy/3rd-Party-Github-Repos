var gulp = require('gulp'),
    concat = require('gulp-concat'),
    neat = require('node-neat'),
    please = require('gulp-pleeease'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    bower = require('gulp-bower'),
    mainBowerFiles = require('main-bower-files'),
    ngAnnotate = require('gulp-ng-annotate'),
    runSequence = require('run-sequence'),
    styleguide = require('./lib/styleguide'),
    distPath = 'lib/dist',
    fs = require('fs'),
    chalk = require('chalk'),
    sassSrc = ['lib/app/sass/app.scss', 'lib/app/sass/styleguide_helper_elements.scss'],
    outputPath = 'demo-output';

require('./gulpfile-tests')(gulp);

gulp.task('js:app', function() {
  return gulp.src([
    'lib/app/js/app.js',
    'lib/app/js/controllers/*.js',
    'lib/app/js/directives/*.js',
    'lib/app/js/services/*.js'
  ])
  .pipe(plumber())
  .pipe(ngAnnotate())
  .pipe(concat('app.js'))
  .pipe(gulp.dest(distPath + '/js'));
});

gulp.task('js:vendor', ['bower'], function() {
  return gulp.src(['lib/app/js/vendor/**/*.js'].concat(mainBowerFiles({filter: /\.js/})))
    .pipe(plumber())
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(distPath + '/js'));
});

gulp.task('bower', function() {
  return bower();
});

gulp.task('sass', function() {
  return gulp.src(sassSrc)
    .pipe(sass({
      // Include bourbon & neat
      includePaths: neat.includePaths
    }))
    .pipe(sourcemaps.init())
    .pipe(please({
      minifier: false
    }))
    .pipe(gulp.dest(distPath + '/css'));
});

gulp.task('sass:no-fail', function() {
  return gulp.src(sassSrc)
    .pipe(plumber())
    .pipe(sass({
      // Include bourbon & neat
      includePaths: neat.includePaths,
      errLogToConsole: true
    }))
    .pipe(sourcemaps.init())
    .pipe(please({
      minifier: false
    }))
    .pipe(gulp.dest(distPath + '/css'));
});

gulp.task('html', function() {
  return gulp.src('lib/app/**/*.html')
    .pipe(gulp.dest(distPath + '/'));
});

gulp.task('assets', function() {
  return gulp.src('lib/app/assets/**')
    .pipe(gulp.dest(distPath + '/assets'));
});

// Copy test directives to output even when running gulp dev
gulp.task('dev:static', function() {
  gulp.src(['lib/demo/**'])
    .pipe(gulp.dest(outputPath + '/demo'));
});

gulp.task('dev:generate', function() {
  return gulp.src(['lib/app/sass/**/*.scss'])
    .pipe(styleguide.generate({
      title: 'SC5 Styleguide',
      server: true,
      rootPath: outputPath,
      overviewPath: 'README.md',
      styleVariables: 'lib/app/sass/_styleguide_variables.scss'
    }))
    .pipe(gulp.dest(outputPath));
});

gulp.task('dev:applystyles', function() {
  if (!fs.existsSync(distPath)) {
    process.stderr.write(chalk.red.bold('Error:') + ' Directory ' + distPath + ' does not exist. You probably installed library by cloning repository directly instead of NPM repository.\n');
    process.stderr.write('You need to run ' + chalk.green.bold('gulp build') + ' first\n');
    process.exit(1);
    return 1;
  }
  return gulp.src([distPath + '/css/*.css'])
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(outputPath));
});

gulp.task('dev', ['dev:static', 'dev:applystyles', 'dev:generate'], function() {
  // Do intial full build and create styleguide
  runSequence('build', 'dev:generate');

  gulp.watch('lib/app/sass/**/*.scss', function() {
    runSequence('sass:no-fail', 'dev:applystyles', 'dev:generate');
  });
  gulp.watch(['lib/app/js/**/*.js', 'lib/app/views/**/*', 'lib/app/index.html', '!lib/app/js/vendor/**/*.js'], function() {
    gulp.start('lint:js');
    runSequence('js:app', 'dev:generate');
  });
  gulp.watch('lib/app/js/vendor/**/*.js', function() {
    runSequence('js:vendor', 'dev:generate');
  });
  gulp.watch('lib/app/**/*.html', function() {
    runSequence('html', 'dev:generate');
  });
  gulp.watch('README.md', ['dev:generate']);
  gulp.watch('lib/styleguide.js', ['dev:generate']);
  gulp.watch('lib/app/**', ['dev:generate']);
});

gulp.task('build', ['sass', 'js:app', 'js:vendor', 'html', 'assets']);

gulp.task('changelog', function() {

  require('conventional-changelog')({
    repository: 'https://github.com/SC5/sc5-styleguide',
    version: require('./package.json').version,
    file: ''
  }, function(err, log) {
    fs.writeFile('./CHANGELOG_LATEST.md', log, function(err) {
      if (err) {
        console.log(err);

      } else {
        console.log('The latest changelog was updated\n\n');
        console.log(log);
      }
    });
  });

});

gulp.task('publish', ['build', 'changelog']);
