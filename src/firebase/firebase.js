import {firebase} from '@firebase/app';
import '@firebase/database';


const config = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: "rvn-50280.firebaseapp.com",
    databaseURL: "https://rvn-50280.firebaseio.com/",
    projectId: "rvn-50280",
    storageBucket: "rvn-50280.firebaseio.com/",
    messagingSenderId: "181911814506"
}

firebase.initializeApp(config);
const database = firebase.database();
 
export default database;