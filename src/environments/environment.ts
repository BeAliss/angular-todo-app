// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
  firebase : {
    apiKey: "AIzaSyB2xTij5h6Oi0P0Aa9V6-BeuBylzL5py1U",
    authDomain: "test-acf99.firebaseapp.com",
    databaseURL: "https://test-acf99.firebaseio.com",
    projectId: "test-acf99",
    storageBucket: "test-acf99.appspot.com",
    messagingSenderId: "534054153368",
    appId: "1:534054153368:web:9ecfe255d9c380fd"
  }
};
