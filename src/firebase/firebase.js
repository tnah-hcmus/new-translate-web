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
class FireBaseWorker {
    constructor() {
      this.worker = new Worker("../worker/worker.js");
      this.worker.addEventListener("message", event => {
        if (event.data.cmd === "data") {
            this.listeners["readData"](event.data.data);
        }
      });
    }
    listeners = {};
  
    initializeApp(config) {
      this.worker.postMessage({ cmd: "initializeApp", data: config });
    }
  
    saveDraft(id,uuid,info) {
      this.worker.postMessage({cmd: "saveDraft", data: {id, uuid, info}});
    }

    readData(id, callback) {
      this.worker.postMessage({cmd: "getData", data: {id}});
      this.listeners["readData"] = callback;
    }
  
    registerListener(name, callback) {
      this.listeners[name] = callback;
    }
}
const firebase = new FireBaseWorker();
firebase.initializeApp();
 
export default firebase;