importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-database.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-analytics.js');

let app = null;
let database = null
// Listen to commands from the main thread and process them here
// in the worker. Magic 💫
self.addEventListener(
  "message",
  event => {
    switch (event.data.cmd) {
      case "initializeApp":
        app = firebase.initializeApp(event.data.data);
        firebase.analytics();
        database = firebase.database();
        break;
      case "saveDraft": {
        const { id, uuid, info } = event.data.data;        
        database.ref(id).child(uuid).set(info);
        break;
      }
      case "getData": {
        const {id} = event.data.data
        database.ref(id).once('value').then((snapshot) => {
            self.postMessage({cmd: "data",data: snapshot});
        })
        break;
      }
    }
  },
  false
);