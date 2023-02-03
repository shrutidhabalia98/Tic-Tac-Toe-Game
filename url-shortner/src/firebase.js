import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNC8tHMIw-5PtABhTY4L5E-2UlzCLphJY",
    authDomain: "url-shortner-9797d.firebaseapp.com",
    projectId: "url-shortner-9797d",
    storageBucket: "url-shortner-9797d.appspot.com",
    messagingSenderId: "613440642627",
    appId: "1:613440642627:web:91820230d5f8ce8051fef6",
    measurementId: "G-DHXGKHC50Q"
  };

  const app = firebase.initializeApp(firebaseConfig);
  export const db = app.firestore();

  