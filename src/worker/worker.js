if( 'function' === typeof importScripts) {
  importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
  importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-database.js');
  
  let app = null;
  let database = null

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
        case "saveDraft": {
          const { id, uuid, info } = event.data.data;        
          database.ref(id).child(uuid).set(info);
          break;
        }
        case "deleteDraft": {
          const {id, uuid} = event.data.data;
          database.ref(`${id}/${uuid}`).remove();
          break;
        }
        case "getData": {
          const {id} = event.data.data;
          const name = event.data.listener;
          database.ref(id).once('value').then((snapshot) => {
              const data = snapshot.val();
              self.postMessage({cmd: "data", listener: name, data: data});
          })
          break;
        }
      }
    },
    false
  );   
}