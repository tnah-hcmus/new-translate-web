import localforage from 'localforage';
localforage.config({
  driver      : localforage.WEBSQL, // Force WebSQL; same as using setDriver()
  name        : 'RVN Translate App',
  version     : 1.0,
  size        : 2000000000, // Size of database, in bytes. WebSQL-only for now.
  storeName   : 'content', // Should be alphanumeric, with underscores.
  description : 'Store translated comment and replies info'
});
var localDB = localforage.createInstance({
  name: "RVN"
});
//load state từ json
export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('rvn-setting');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }    
  };
  //ghi state vào json
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('rvn-setting', serializedState);
  } catch {
    // ignore write errors
  }
};
export const loadStateDB = async () => {
  return await localDB.getItem('reddit-app-712');
};
export const saveStateDB = (state) => {
  if(state.tabs.length !== 0 )  localDB.setItem('reddit-app-712', state);
};