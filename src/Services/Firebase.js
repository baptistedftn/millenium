import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyAutQs7uT2DFQh1hDKtczshEDjetd5IkF8",
    authDomain: "millenium-marles.firebaseapp.com",
    databaseURL: "https://millenium-marles.firebaseio.com",
    projectId: "millenium-marles",
    storageBucket: "millenium-marles.appspot.com",
    messagingSenderId: "932185084880",
    appId: "1:932185084880:web:e65b2c30952c6cfb749fd5"
  };
firebase.initializeApp(firebaseConfig);
export default firebase;
export const auth = firebase.auth;
export const db = firebase.database();