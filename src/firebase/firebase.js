import Worker from 'worker-loader!../worker/firebase';
import {firebase} from '@firebase/app';
import '@firebase/auth';
import '@firebase/analytics';

const config = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
}
firebase.initializeApp(config);
firebase.analytics();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const _createID = () => {
  let guid = 'xxyxyx'.replace(/[xy]/g, (c) => {
  let r = Math.random() * 16 | 0,
  v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
  return guid;
}
class FireBaseWorker {
    constructor() {
      this.worker = new Worker();
      this.worker.addEventListener("message", event => {
        switch (event.data.cmd) {
          case "data":
            this.listeners[event.data.listener](event.data.data);
            delete this.listeners[event.data.listener];
            break;
          case "invoke":
            this.listeners[event.data.listener]();
            delete this.listeners[event.data.listener];
          default:
            break
        }
      });
    }
    listeners = {};
  
    initializeApp(config) {
      this.worker.postMessage({ cmd: "initializeApp", data: config });
    }

    pushData(data) {
      const name = _createID();
      this.worker.postMessage({cmd: "pushData", listener: name, data});
      return new Promise(resolve => this.registerListener(name, resolve));
    }

    setData(data) {
      const name = _createID();
      this.worker.postMessage({cmd: "setData", listener: name, data});
      return new Promise(resolve => this.registerListener(name, resolve));
    }

    readData(data) {
      const name = _createID();
      this.worker.postMessage({cmd: "readData", listener: name, data});
      return new Promise(resolve => this.registerListener(name, resolve));
      
    }
    
    updateData(data) {
      const name = _createID();
      this.worker.postMessage({cmd: "updateData", listener: name, data});
      return new Promise(resolve => this.registerListener(name, resolve));
    }

    deleteData(data) {
      const name = _createID();
      this.worker.postMessage({cmd: "deleteData", listener: name, data});
      return new Promise(resolve => this.registerListener(name, resolve));
    }

    registerListener(name, callback) {
      this.listeners[name] = callback;
    }
}
const database = new FireBaseWorker();
database.initializeApp(config);
 
export {database as default , firebase, googleAuthProvider, facebookAuthProvider, database};