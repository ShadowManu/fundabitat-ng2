/**
 * To run this script use `node import-storage.js {firebase admin key} {folder}
 */

const path = require('path')
const fs = require('fs')
const admin = require('firebase-admin');
const lodash = require('lodash');
const { forEach } = lodash;

// Read key
const keyName = process.argv[2];
const keyPath = path.join(process.cwd(), keyName);
const key = require(keyPath);

// Read files
const folderName = process.argv[3];
const folderPath = path.join(process.cwd(), folderName);
const filePaths = fs.readdirSync(folderPath).map(fileName => path.join(folderPath, fileName));

admin.initializeApp({
  credential: admin.credential.cert(key),
  databaseURL: "https://fundabitat-ng2.firebaseio.com"
});

const bucket = admin.storage().bucket('fundabitat-ng2.appspot.com');


// For each file
forEach(filePaths, filePath => {
  const read = fs.createReadStream(filePath);
  const write = bucket.file(path.basename(filePath)).createWriteStream();

  // Upload file
  read.pipe(write)
  .on('finish', () => { console.log('Upload completed'); });
});
