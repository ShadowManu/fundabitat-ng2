// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAS80N9W1vJOHk7kjNI6DK3PBagAKCVOpg",
    authDomain: "fundabitat-ng2.firebaseapp.com",
    databaseURL: "https://fundabitat-ng2.firebaseio.com",
    storageBucket: "fundabitat-ng2.appspot.com",
    messagingSenderId: "177570277387"
  }
};
