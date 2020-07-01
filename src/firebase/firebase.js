import * as firebase from 'firebase';


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
const savePost = (id, data) => {
    database.ref(id).set({data: data});
}
 
export {firebase, savePost, database as default }