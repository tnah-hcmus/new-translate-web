import Worker from 'worker-loader!../worker/worker';
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
      this.worker = new Worker();
      this.worker.addEventListener("message", event => {
        switch (event.data.cmd) {
          case "data":
            this.listeners[event.data.listener](event.data.data);
            break;
          default:
            break
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

    deleteDraft(id, uuid) {
      this.worker.postMessage({cmd: "deleteDraft", data: {id, uuid}});
    }

    readData(id, callback) {
      this.worker.postMessage({cmd: "getData", listener: "readData", data: {id}});
      this.registerListener("readData", callback);
    }
  
    registerListener(name, callback) {
      this.listeners[name] = callback;
    }
}
const firebase = new FireBaseWorker();
firebase.initializeApp(config);
 
export default firebase;