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
const saveToCloud = (id, uuid, data) => {
    database.ref(id).child(uuid).set(data);
}
const getFromCloud = (id) => {
    database.ref(id).once('value').then((snapshot) => {
        console.log(snapshot.val());
    });
      
}
 
export {firebase, saveToCloud, getFromCloud, database as default }