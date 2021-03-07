class IDBWrapper {
    constructor(collection) {
      const methods = [
        "db",
        "collection",
        "openCollection",
        "closeDatabase",
        "getDatabaseInformation",
      ];
      this.collection = collection;
      const idb = this;
      return new Proxy(this, {
        get: function (target, prop, receiver) {
          if (!methods.includes(prop)) {
            return new IDBStore(prop, idb.db);
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
        request.onblocked = (event) => reject(new BlockedIndefinitelyError());
      });
    }
    closeDatabase() {
      return this.db.close();
    }
    async openCollection(storeName, primaryKey) {
      const info = await this.getDatabaseInformation();
      let version = info.version;
      if (storeName && !info.objectStoreNames.contains(storeName)) version++;
      const db = await new Promise((resolve, reject) => {
        const request = indexedDB.open(this.collection, version);
        if (storeName) {
          request.onupgradeneeded = () => {
            const db = request.result;
            db.objectStoreNames.contains(storeName) ||
              db.createObjectStore(storeName, { keyPath: primaryKey });
          };
        }
        request.onsuccess = () => {
          resolve(request.result);
        };
        request.onerror = (event) => {
          reject(request.error);
        };
      });
      this.db = db;
    }
  }
  class IDBStore {
    constructor(storeName, db) {
      this.storeName = storeName;
      this.db = db;
    }
    createTransaction() {
      const transaction = this.db.transaction(this.storeName, "readwrite");
      const store = transaction.objectStore(this.storeName);
      return store;
    }
    executeQuery(queryFunction) {
      return new Promise((resolve, reject) => {
        const store = this.createTransaction();
        const request = queryFunction(store);
        request.onsuccess = () => {
          resolve(request.result);
        };
        request.onerror = (event) => {
          reject(request.error);
        };
      });
    }
    where(index) {
      return new IDBIndex(this.storeName, index, this.db);
    }
    put(id, data) {
      const store = this.createTransaction();
      data.id = id;
      store.put(data);
    }
    putList(dataList) {
      const store = this.createTransaction();
      for (const item of dataList) {
        store.put(item);
      }
    }
    get(id) {
      return this.executeQuery((store) => {
        return store.get(id);
      });
    }
    getAll() {
      return this.executeQuery((store) => {
        return store.getAll();
      });
    }
    delete(id) {
      return this.executeQuery((store) => {
        return store.delete(id);
      });
    }
    countRecord() {
      return this.executeQuery((store) => {
        return store.count();
      });
    }
  }
  class IDBIndex {
    constructor(storeName, index, db) {
      this.index = index;
      this.storeName = storeName;
      this.db = db;
    }
    createTransaction = () => {
      const tx = this.db.transaction(this.storeName, "readwrite");
      const objectStore = tx.objectStore(this.storeName);
      return objectStore.index("by_" + this.index);
    };
    withIndexRaw = (index, key, onSuccess, onFail) => {
      const request = index.get(key);
      request.onsuccess = () => {
        const matching = request.result;
        onSuccess(matching ? matching : null);
      };
      request.onerror = (event) => {
        onFail(request.error);
      };
    };
    async withIndex(key) {
      const index = this.createTransaction();
      const value = await new Promise((resolve, reject) => {
        this.withIdRaw(
          index,
          key,
          (item) => resolve(item),
          (err) => reject(err)
        );
      });
      return value;
    }
    equalToV1 = (index, searchKey, onFound, onFinish) => {
      //Most easy implement with native IDBKeyRange.only, but a bit slower v2;
      const request = index.openCursor(IDBKeyRange.only(searchKey));
      request.onsuccess = () => {
        const cursor = request.result;
        if (cursor) {
          onFound(cursor.value);
          cursor.continue();
        } else onFinish({ err: null });
      };
      request.onerror = () => {
        onFinish({ err: request.error });
      };
    };
    equalToV2 = (index, searchKey, onFound, onFinish) => {
      //a bit faster, only loop through record with match key, if not in match key, jump in search key
      const request = index.openCursor();
      let first = 0;
      request.onsuccess = () => {
        const cursor = request.result;
        if (cursor) {
          const key = cursor.key;
          if (key == searchKey) {
            first = 1;
            onFound(cursor.value);
            cursor.continue();
          } else if (!first) {
            first = 1;
            cursor.continue(searchKey);
          } else onFinish({ err: null });
        } else onFinish({ err: null });
      };
      request.onerror = (event) => {
        onFinish({ err: request.error });
      };
    };
    async equalTo(searchKey) {
      const index = this.createTransaction();
      const data = await new Promise((resolve, reject) => {
        let data = [];
        this.equalToV1(
          index,
          searchKey,
          (item) => data.push(item),
          ({ err }) => {
            if (err) reject(err);
            else resolve(data);
          }
        ); //cound faster with equalToV2
      });
      return data;
    }
    anyOfRaw = (index, listKeys, onFound, onFinish) => {
      //Base on v2, search with multi-key, jump in only match key;
      const request = index.openCursor();
      const set = listKeys.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
      let i = 0;
      request.onsuccess = () => {
        const cursor = request.result;
        if (cursor) {
          const key = cursor.key;
          while (key > set[i]) {
            i++;
            if (i === set.length) {
              onFinish({ err: null });
              return;
            }
          }
          if (key == set[i]) {
            onFound(cursor.value);
            cursor.continue();
          } else cursor.continue(set[i]);
        } else onFinish({ err: null });
      };
      request.onerror = (event) => {
        onFinish({ err: request.error });
      };
    };
    async anyOf(authorList) {
      const index = this.createTransaction();
      const data = await new Promise((resolve, reject) => {
        let data = [];
        anyOfRaw(
          index,
          authorList,
          (item) => data.push(item),
          ({ err }) => {
            if (err) reject(err);
            else resolve(data);
          }
        );
      });
      return data;
    }
}
export {IDBWrapper as default, IDBIndex, IDBStore}
  