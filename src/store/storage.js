import localforage from 'localforage';
localforage.config({
  driver      : localforage.WEBSQL, // Force WebSQL; same as using setDriver()
  name        : 'RVN Translate App',
  version     : 1.0,
  size        : 2000000000, // Size of database, in bytes. WebSQL-only for now.
  storeName   : 'content', // Should be alphanumeric, with underscores.
  description : 'Store translated comment and replies info'
});
const localDB = localforage.createInstance({
  name: "RVN"
});
//load state từ json
export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('rvn-setting');
      if (serializedState === null) {
        return undefined;
      }
      localStorage.removeItem('rvn-setting');
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }    
  };
export const loadStateDB = async () => {
  const result =  await localDB.getItem('reddit-app-712');
  localDB.removeItem('reddit-app-712');
  return result;
};