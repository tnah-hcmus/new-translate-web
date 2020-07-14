import {firebase} from '@firebase/app';
import '@firebase/database';
import '@firebase/analytics';


const config = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: "rvn-50280.firebaseapp.com",
    databaseURL: "https://rvn-50280.firebaseio.com/",
    projectId: "rvn-50280",
    storageBucket: "rvn-50280.firebaseio.com/",
    messagingSenderId: "181911814506",
    appId: "1:181911814506:web:4cb5ce604bee25b475a513",
    measurementId: "G-18YLLL9XTR"

}

firebase.initializeApp(config);
firebase.analytics();
const database = firebase.database();
 
export default database;