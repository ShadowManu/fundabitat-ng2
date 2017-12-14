/**
 * To run this script use `node import-firestore.js {firebase admin key} {firestore json file}
 */

const path = require('path')
const admin = require('firebase-admin');
const lodash = require('lodash');
const { forEach, isArray, isPlainObject, keys } = lodash;

// Read key
const keyName = process.argv[2];
const keyPath = path.join(process.cwd(), keyName);
const key = require(keyPath);

// Read data
const dataName = process.argv[3];
const dataPath = path.join(process.cwd(), dataName);
const data = require(dataPath);

admin.initializeApp({
  credential: admin.credential.cert(key),
  databaseURL: "https://fundabitat-ng2.firebaseio.com"
});

const firestore = admin.firestore();

forEach(keys(data), colName => {
  const collection = data[colName];

  if (isArray(collection)) {
    forEach(collection, document => uploadDoc(colName, undefined, document));
  }

  else if (isPlainObject(collection)) {
    forEach(keys(collection), docKey => uploadDoc(colName, docKey, collection[docKey]));
  }
});

function uploadDoc(colName, docKey, document) {
  let promise = docKey ?
    firestore.collection(colName).doc(docKey).set(document) :
    firestore.collection(colName).doc().set(document);

  return promise
  .then((res) => { console.log('Document uploaded'); })
  .catch((error) => { console.log('Error writing document: ', error); });
}
