import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



export const config = {
    apiKey: "AIzaSyBBcUOGtkM9T4eg9jIE3sAJapARaiP2goc",
    authDomain: "saltala-test.firebaseapp.com",
    databaseURL: "https://saltala-test.firebaseio.com",
    projectId: "saltala-test",
    storageBucket: "saltala-test.appspot.com",
    messagingSenderId: "407887022248",
    appId: "1:407887022248:web:d037f2c46c46bc321bda9d"
};

export const settings = { timestampsInSnapshots: true };

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

// const dbConnect = firebase.firestore();

// // const firestore = firebase.firestore();

export default firebase;
// export default firebase.firestore();




// const fb = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

// import firebase from 'firebase';
// import '@firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyBBcUOGtkM9T4eg9jIE3sAJapARaiP2goc",
//     authDomain: "saltala-test.firebaseapp.com",
//     databaseURL: "https://saltala-test.firebaseio.com",
//     projectId: "saltala-test",
//     storageBucket: "saltala-test.appspot.com",
//     messagingSenderId: "407887022248",
//     appId: "1:407887022248:web:d037f2c46c46bc321bda9d"
//   };
//   // Initialize Firebase
// const Firebase = firebase.initializeApp(firebaseConfig);

// const dbh = firebase.firestore();

// dbh.collection("characters").doc("mario").set({
//   employment: "plumber",
//   outfitColor: "red",
//   specialAttack: "fireball"
// })

// var config = {
//   apiKey: "AIzaSyDviZwXlaomNCO89rMKeqp_dau772lQihA",
//   authDomain: "circlead-test.firebaseapp.com",
//   databaseURL: "https://circlead-test.firebaseio.com",
//   projectId: "circlead-test",
//   storageBucket: "circlead-test.appspot.com",
//   messagingSenderId: "948137755400"
// };

// const Firebase = fb.initializeApp(config);

/* ENABLE OFFLINE-PERSISTENCE
fb.firestore().enablePersistence()
  .then(function() {
      // Initialize Cloud Firestore through firebase
      Firestore = fb.firestore();
      console.log("Firestore ensbled with persistence.");
  })
  .catch(function(err) {
      if (err.code == 'failed-precondition') {
        console.log("Multiple tabs open, persistence can only be enabled in one tab at a a time.");
      } else if (err.code == 'unimplemented') {
        console.log("The current browser does not support all of the features required to enable persistence");
      }
  });*/

// export default Firebase;