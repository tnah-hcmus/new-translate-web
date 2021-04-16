function nextCasing(key, lowerKey, upperNeedle, lowerNeedle) {
  var length = Math.min(key.length, lowerNeedle.length); // lowerNeedle is from outer scope
  var llp = -1; // "llp = least lowerable position"

  // Iterate through the most common first chars for cursor.key and needle.
  for (var i = 0; i < length; ++i) {
      var lwrKeyChar = lowerKey[i];

      if (lwrKeyChar !== lowerNeedle[i]) {
          // The char at position i differs between the found key and needle being
          // looked for when just doing case insensitive match.
          // Now check how they differ and how to trace next casing from this:
          if (key[i] < upperNeedle[i]) {
              // We could just append the UPPER version of the key we're looking for
              // since found key is less than that.
              return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
          }

          if (key[i] < lowerNeedle[i]) {
              // Found key is between lower and upper version. Lets first append a
              // lowercase char and the rest as uppercase.
              return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
          }

          if (llp >= 0) {
              // Found key is beyond this key. Need to rewind to last lowerable
              // position and return key + 1 lowercase char + uppercase rest.
              return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1)
          }

          // There are no lowerable positions - all chars are already lowercase
          // (or non-lowerable chars such as space, periods etc)

          return null;
      }

      if (key[i] < lwrKeyChar) {
          // Making lowercase of this char would make it appear after key.
          // Therefore set llp = i.
          llp = i;
  }

  // All first common chars of found key and the key we're looking for are equal
  // when ignoring case.
  if (length < lowerNeedle.length) {
      // key was shorter than needle, meaning that we may look for key + UPPERCASE
      // version of the rest of needle.
      return key + upperNeedle.substr(key.length);
  }

  // Found key was longer than the key we're looking for
  if (llp < 0) {
      // ...and there is no way to make key we're looking for appear after found key.
      return null;
  } else {
      // There is a position of a char, that if we make that char lowercase,
      // needle will become greater than found key.
      return key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1);
  }
 }
}

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
  createObjectStore(storeName, primaryKey, indexList) {
    if(!storeName || !primaryKey) return;
    if(indexList && !Array.isArray(indexList)) return;
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
              const objectStore  = db.createObjectStore(storeName, {
                  keyPath: primaryKey
              });
              indexList.forEach(index => {
                objectStore.createIndex('by_' + index.key, index.key, {...index.config});
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
  equalsIgnoreCase = (searchKey) => { 
    const upperNeedle = searchKey.toUpperCase();
    const lowerNeedle = searchKey.toLowerCase();
    let listMatchKey = [];
    let listIdMatchKey = [];
    return this.executeQuery(async (conn) => {
      return await this.doAsyncQuery(conn, 
        (index) => {
          return index.openCursor();
        },
        (data, resolve) => {
          const cursor = data;
          if (cursor) {
            const key = cursor.key;
            if(typeof key !== 'string') {
              cursor.continue();
            }
            const lowerKey = key.toLowerCase();
            if (lowerKey == lowerNeedle) {
              listMatchKey.push(cursor.value);
              listIdMatchKey.push(cursor.value.id);
              cursor.continue();
            } else{
              const nextNeedle = nextCasing(key, lowerKey, upperNeedle, lowerNeedle);
              if (nextNeedle) {
                cursor.continue(nextNeedle);
              } else resolve({data: listMatchKey, id: listIdMatchKey});
            }
          } else resolve({data: listMatchKey, id: listIdMatchKey})
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
  