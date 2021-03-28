class IDBWrapper {
  constructor(collection) {
    const methods = [
      "db",
      "collection",
      "connect",
      "createObjectStore",
      "deleteObjectStore",
      "getDatabaseInformation",
    ];
    this.collection = collection;
    const idb = this;
    return new Proxy(this, {
      get: function (target, prop, receiver) {
        if (!methods.includes(prop)) {
          return new IDBStore(prop, idb);
        } else return idb[prop];
      },
      set(target, prop, value) {
        return Reflect.set(...arguments);
      },
    });
  }
  getDatabaseInformation() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.collection);
      request.onsuccess = (event) => {
        const db = request.result;
        const version = parseInt(db.version);
        const objectStoreNames = db.objectStoreNames;
        db.close();
        resolve({ version, objectStoreNames });
      };
      request.onerror = (event) => reject(event.target.error);
      request.onblocked = (event) => reject('blocked');
    });
  }
  deleteObjectStore(storeName) {
    return new Promise((resolve, reject) => {
      console.log('get version store open')
      const getVersionRequest = indexedDB.open('reddit-post');
      getVersionRequest.onsuccess = (e) => {
        const database = e.target.result;
        const version =  parseInt(database.version);
        database.onversionchange = () => {
          database.close();
          console.log('connection in get version store still open')
        }
        if(database.objectStoreNames.contains(storeName)) {
          //need add storeName
          database.close();
          console.log('delete object store open')
          const deleteStoreRequest = indexedDB.open('reddit-post', version+1);
          deleteStoreRequest.onupgradeneeded = function (e) {
              const db = e.target.result;
              db.deleteObjectStore(storeName);
          };
          deleteStoreRequest.onsuccess = function (e) {
            const db = e.target.result;
            db.onversionchange = () => {
              db.close();
              console.log('connection in delete store still open')
            }
            db.close();
            resolve('success delete');
          }
          deleteStoreRequest.onerror = (event) => reject(event.target.error);
          deleteStoreRequest.onblocked = () => reject('delete store request is blocked');
        } else {
          database.close();
          reject('not exist')
        }
      }
      getVersionRequest.onerror = (event) => reject(event.target.error);
      getVersionRequest.onblocked = () => reject('get version request is blocked');
    });
  }
  createObjectStore(storeName, primaryKey) {
    return new Promise((resolve, reject) => {
      console.log('get version store open')
      const getVersionRequest = indexedDB.open('reddit-post');
      getVersionRequest.onsuccess = (e) => {
        const database = e.target.result;
        const version =  parseInt(database.version);
        database.onversionchange = () => {
          database.close();
          console.log('connection in get version store still open')
        }
        if(!database.objectStoreNames.contains(storeName)) {
          //need add storeName
          database.close();
          console.log('add object store open')
          const createStoreRequest = indexedDB.open('reddit-post', version+1);
          createStoreRequest.onupgradeneeded = function (e) {
              const db = e.target.result;
              db.createObjectStore(storeName, {
                  keyPath: primaryKey
              });
          };
          createStoreRequest.onsuccess = function (e) {
            const db = e.target.result;
            db.onversionchange = () => {
              db.close();
              console.log('connection in add store still open')
            }
            db.close();
            resolve('success open');
          }
          createStoreRequest.onerror = (event) => reject(event.target.error);
          createStoreRequest.onblocked = () => reject('add store request is blocked');
        } else {
          database.close();
          reject('already exist')
        }
      }
      getVersionRequest.onerror = (event) => reject(event.target.error);
      getVersionRequest.onblocked = () => reject('get version request is blocked');
    });
  }
  async connect(version, onupgradeneeded) {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.collection, version);
      request.onupgradeneeded = onupgradeneeded || null;
      request.onsuccess = () => {
        const db = request.result;
        db.onversionchange = () => {
          db.close();
          console.log('connection in connect still open')
        }
        resolve(db);
      }
      request.onerror = () => reject(request.error);
      request.onblocked = () => console.warn('connect pending till unblocked');
    });
  }
}
class IDBStore {
  constructor(storeName, db) {
    this.storeName = storeName;
    this.db = db;
  }
  createTransaction(connection) {
    const transaction = connection.transaction(this.storeName, "readwrite");
    const store = transaction.objectStore(this.storeName);
    return store;
  }
  doAsyncQuery(conn, queryFunction) {
    return new Promise((resolve, reject) => {
      const store = this.createTransaction(conn);
      const request = queryFunction(store);
      request.onsuccess = () => {
        resolve(request.result);
      };
      request.onerror = (event) => {
        reject(request.error);
      };
    });
  }
  async executeQuery(executeRequest) {
    let conn = null;
    try {
      conn = await this.db.connect();
      return await executeRequest(conn);
    } catch (err) {
      console.log('error when open DB', err);
    } finally {
      if(conn)
        conn.close();
    }
  }
  where(index) {
    return new IDBIndex(this.storeName, index, this.db);
  }
  put(id, data) {
    this.executeQuery(conn => {
      const store = this.createTransaction(conn);
      data.id = id;
      store.put(data);
    })
  }
  putList(dataList) {
    this.executeQuery(conn => {
      const store = this.createTransaction(conn);
      for (const item of dataList) {
        store.put(item);
      }
    })
  }
  get(id) {
    return this.executeQuery(async (conn) => {
      return await this.doAsyncQuery(conn, (store) => {
        return store.get(id);
      })
    })
  }
  getAll() {
    return this.executeQuery(async (conn) => {
      return await this.doAsyncQuery(conn, (store) => {
        return store.getAll();
      })
    })
  }
  delete(id) {
    this.executeQuery(async (conn) => {
      return await this.doAsyncQuery(conn, (store) => {
        return store.delete(id);
      })
    })
  }
  countRecord() {
    this.executeQuery(async (conn) => {
      return await this.doAsyncQuery(conn, (store) => {
        return store.delete(id);
      })
    })
  }
}
class IDBIndex {
  constructor(storeName, index, db) {
    this.index = index;
    this.storeName = storeName;
    this.db = db;
  }
  createTransaction = (connection) => {
    const tx = connection.transaction(this.storeName, "readwrite");
    const objectStore = tx.objectStore(this.storeName);
    return objectStore.index("by_" + this.index);
  };
  doAsyncQuery(conn, queryFunction, onSuccess, onFail) {
    return new Promise((resolve, reject) => {
      const index = this.createTransaction(conn);
      const request = queryFunction(index);
      request.onsuccess = () => {
        onSuccess(request.result, resolve)
      };
      request.onerror = (event) => {
        onFail(request.error, reject)
      };
    });
  }
  async executeQuery(executeRequest) {
    let conn = null;
    try {
      conn = await this.db.connect();
      return await executeRequest(conn);
    } finally {
      if(conn)
        conn.close();
    }
  }
  withIndex = (key) => {
    return this.executeQuery(async (conn) => {
      return await this.doAsyncQuery(conn, 
        (index) => {
        return index.get(key)
        },
        (data, resolve) => {
          const matching = data;
          resolve(matching ? matching : null);
        },
        (error, reject) => {
          reject(error)
        }
      )
    })
  };
  equalTo = (searchKey) => {
    //a bit faster, only loop through record with match key, if not in match key, jump in search key
    let first = 0;
    let listMatchKey = [];
    return this.executeQuery(async (conn) => {
      return await this.doAsyncQuery(conn, 
        (index) => {
          return index.openCursor();
        },
        (data, resolve) => {
          const cursor = data;
          if (cursor) {
            const key = cursor.key;
            if (key == searchKey) {
              first = 1;
              listMatchKey.push(cursor.value)
              cursor.continue();
            } else if (!first) {
              first = 1;
              cursor.continue(searchKey);
            } else resolve(listMatchKey)
          } else resolve(listMatchKey)
        },
        (error, reject) => {
          reject(error)
        }
      )
    })
  };
  anyOf = (listKeys) => {
    //Base on v2, search with multi-key, jump in only match key;
    const set = listKeys.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
    let i = 0;
    let listMatchKey = [];
    return this.executeQuery(async (conn) => {
      return await this.doAsyncQuery(conn, 
        (index) => {
          return index.openCursor();
        },
        (data, resolve) => {
          const cursor = data;
          if (cursor) {
            const key = cursor.key;
            while (key > set[i]) {
              i++;
              if (i === set.length) {
                resolve(listMatchKey)
              }
            }
            if (key == set[i]) {
              listMatchKey.push(cursor.value);
              cursor.continue();
            } else cursor.continue(set[i]);
          } else resolve(listMatchKey)
        },
        (error, reject) => {
          reject(error)
        }
      )
    });
  };
}
const idb = new IDBWrapper('reddit-post');
export {idb as default, IDBIndex, IDBStore}
  