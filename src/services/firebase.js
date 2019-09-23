import firebase from 'firebase/app';
import 'firebase/firestore';
// import 'firebase/auth';



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
firebase.firestore();

export default firebase;