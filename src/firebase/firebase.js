import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyCl9UDd0N_tbguTCWBZlcBnYbHOxYHcM64",
    authDomain: "reddit-translate.firebaseapp.com",
    databaseURL: "https://reddit-translate.firebaseio.com",
    projectId: "reddit-translate",
    storageBucket: "reddit-translate.appspot.com",
    messagingSenderId: "337884755115",
    appId: "1:337884755115:web:73bf27c561c3ab5b7873ee",
    measurementId: "G-VGZFGZ8CDE"
};

firebase.initializeApp(config);

const database = firebase.database();



export {firebase, database as default};