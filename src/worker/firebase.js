if( 'function' === typeof importScripts) {
  importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
  importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-database.js');
  importScripts('https://www.gstatic.com/firebasejs/8.2.10/firebase-auth.js');
  
  let app = null;
  let database = null;

  self.addEventListener(
    "message",
    event => {
      switch (event.data.cmd) {
        case "initializeApp":
          if (!firebase.apps.length) {
            app = firebase.initializeApp(event.data.data);            
          }          
          database = firebase.database();
          break;
        case "setData": {
          const {path, data} = event.data.data;
          const name = event.data.listener;
          database.ref(path).set(data).then(() => {
            self.postMessage({cmd: "invoke", listener: name});
          });
          break;
        }
        case "pushData": {
          const {path, data} = event.data.data;
          const name = event.data.listener;
          database.ref(path).push(data).then((ref) => {
            self.postMessage({cmd: "data", listener: name, data: ref.key});
          });
          break;
        }
        case "readData": {
          const {path} = event.data.data;
          const name = event.data.listener;
          database.ref(path).once('value').then((snapshot) => {
              const data = snapshot.val();
              self.postMessage({cmd: "data", listener: name, data: data});
          })
          break;
        }
        case "updateData": {
          const {path, data} = event.data.data;
          const name = event.data.listener;
          database.ref(path).update(data).then(() => {
              self.postMessage({cmd: "invoke", listener: name});
          })
          break;
        }
        case "deleteData": {
          const {path} = event.data.data;
          const name = event.data.listener;
          database.ref(path).remove().then(() => {
              self.postMessage({cmd: "invoke", listener: name});
          })
          break;
        }
      }
    },
    false
  );   
}