'use strict';

require('dotenv').config();
const gulp = require('gulp');

// ACCESS KEY ID AND SECRET ACCESS KEY // are retrieved from .env file -> environment vars
let s3 = require('gulp-s3-upload')();

gulp.task('sync-s3', function() {
  let UploadConfig = { Bucket: 'hilaritycards.com', ACL: 'public-read' };
  let S3Config = { region: 'us-west-2' };

  gulp.src('./dist/**').pipe(s3(UploadConfig, S3Config));
});
