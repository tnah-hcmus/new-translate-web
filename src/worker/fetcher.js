if( 'function' === typeof importScripts) {
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
            resolve('already exist')
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
      return this.executeQuery(async (conn) => {
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
  class PostParser {
      standardlizeUrl = (url) => {
        url = url.trim().replace(/(\/+)$/, "");
        const regex = new RegExp("(?!www)redd.it/[^s]{2,}");
        const wwwRegex = new RegExp("https?://reddit.[^s]{2,}");
        if (wwwRegex.test(url)) url = url.replace(/reddit/, "www.reddit");
        if (regex.test(url)) {
          url = url.replace(/redd.it/, "www.reddit.com");
        }
        return url + '.json';
      };
      //Get award, max 3 award: platium -> gold -> silver -> another awards
      getAward = (data) => {
        let count = 0;
        let result = data.all_awardings.reduce((award, item) => {
          if (
            item.name === "Platinum" ||
            item.name === "Gold" ||
            item.name === "Silver"
          ) {
            count++;
            const plural = item.count > 1 ? "s" : "";
            return (award =
              award + `x${item.count} ${item.name.toLowerCase()}${plural} - `);
          } else return award;
        }, "");
        if (count < 3) {
          return data.all_awardings
            .reduce((award, item) => {
              if (
                item.name !== "Platinum" &&
                item.name !== "Gold" &&
                item.name !== "Silver" &&
                count < 3
              ) {
                count++;
                return (award =
                  award +
                  `x${item.count} ${
                    item.name === "Press F"
                      ? "press F"
                      : item.name.toLowerCase().replace(/\(pro\)/, "pro")
                  } - `);
              } else return award;
            }, result)
            .replace(/(\ \-\ )$/, "");
        } else return result.replace(/(\ \-\ )$/, "");
      };
      //Parse upvote: 11600 -> 11.6k
      upvoteParse = (upvotes) => {
        if (upvotes > 1000) {
          let first = Math.floor(upvotes / 1000);
          let second = Math.floor((upvotes - first * 1000) / 100);
          return first + "." + second + "k" + " points";
        } else
          return upvotes > 1 || upvotes < -1
            ? `${upvotes} points`
            : `${upvotes} point`;
      };
      //Get a post info except its comments
      parseInfo = (postInfo) => {
        const mediaData = postInfo.media ? postInfo.media.reddit_video : null;
        function getAllWords(text) {
          const allWordsIncludingDups = text.split('');
          const wordSet = allWordsIncludingDups.reduce(function (prev, current) {
              prev[current] = true;
              return prev;
          }, {});
          return Object.keys(wordSet);
        }
        const author = "u/" + postInfo.author;
        const indexed_author = getAllWords(author);
        return {
          subReddit: postInfo.subreddit_name_prefixed,
          shortenLink: "https://redd.it/" + postInfo.id,
          title: postInfo.title,
          text: postInfo.selftext,
          awards: this.getAward(postInfo),
          author,
          indexed_author,
          upvotes: this.upvoteParse(parseInt(postInfo.ups)),
          id: postInfo.id,
          fallbackUrl: mediaData ? mediaData.fallback_url.split("?")[0] : "",
          url: postInfo.url,
          isVideo: postInfo.is_video,
          isImage:
            postInfo.post_hint === "image" || postInfo.domain === "imgur.com",
          link: "https://www.reddit.com" + postInfo.permalink,
        };
      };
      //Get a comment info
      parseComment = (commentInfo, prefix) => {
        if (commentInfo.data.author) {
          function getAllWords(text) {
            const allWordsIncludingDups = text.split('');
            const wordSet = allWordsIncludingDups.reduce(function (prev, current) {
                prev[current] = true;
                return prev;
            }, {});
            return Object.keys(wordSet);
          }
          const author = "u/" + commentInfo.data.author;
          const indexed_author = getAllWords(author);
          return {
            id: commentInfo.data.id,
            upvotes: this.upvoteParse(parseInt(commentInfo.data.ups)),
            author,
            indexed_author,
            awards: commentInfo.data.all_awardings
              ? this.getAward(commentInfo.data)
              : "",
            parent: commentInfo.data.parent_id.slice(
              3,
              commentInfo.data.parent_id.length
            ),
            prefixed: prefix,
            content: commentInfo.data.body,
          };
        } else console.log(commentInfo);
      };
  }
    
  class Fetcher {
      constructor(url, callback) {
        this.helper = new PostParser();
        this.url = this.helper.standardlizeUrl(url);
        this.isDataExist = false;
        this.callback = callback;
        this.moreChild = [];
        this.db = new IDBWrapper("reddit-post");
        this.fetcherWorkings = 0;
        this.totalFetcher = 0;
        this.current = 0;
        this.maxBatch = 3;
        this.batch = 0;
        this.bus = new EventTarget();
      }
      updateProgress = (data) => {
        self.postMessage({cmd: "update-progress", data})
      }
      waitForBatch  = () => {
        return new Promise((resolve, reject) => {
          this.bus.addEventListener("free", () => {
            resolve();
          });
        })
      }
      decreaseBatch = () => {
        this.batch--;
        this.bus.dispatchEvent(new CustomEvent("free", {}));
      }
      donePartOfFetcher = () => {
        if(!this.totalFetcher) this.totalFetcher = this.fetcherWorkings;
        this.fetcherWorkings--;
        const progress = Math.ceil(((this.totalFetcher-this.fetcherWorkings)/this.totalFetcher) * 100)
        if(this.current !== progress) {
          this.current = progress;
          this.updateProgress(this.current);
        }
      }
      status = (response) => {
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response);
        } else {
          return Promise.reject(new Error(response.statusText));
        }
      };
      json = (response) => {
        return response.json();
      };
      queueAsyncJob = async (func, ...param) => {
        const executeJob = async () => {
          this.batch++;
          const data = await func(...param);
          this.decreaseBatch();
          return data;
        }
        if(this.batch >= this.maxBatch) {
          await this.waitForBatch();
          return await executeJob();
        } else {
          return await executeJob();
        }
      }
      parsePost = async (json) => {
        const postInfo = json[0].data.children[0].data;
        const bodyRoot = this.helper.parseInfo(postInfo);
        this.id = bodyRoot.id;
        this.root = { data: bodyRoot, replies: [] };
        try {
          const result = await this.db.createObjectStore(this.id, 'id', [
            {key: 'indexed_author', config: {unique: false, multiEntry: true}},
            {key: 'author', config: {unique: false}}
          ]);
          if(result.includes('exist')) this.isDataExist = true;
          else this.db[this.id].put(this.id, bodyRoot);
          await this.getCommentsFromJSON(json);
        }
        catch(err) {
          console.log('open error in parse post', err)
        }
      };
      fetchUrl = (url, isOK, json, parsePost, callback) => {
        this.fetcherWorkings++;
        return fetch(url)
          .then((data) => this.queueAsyncJob(isOK, data))
          .then((data) => this.queueAsyncJob(json, data))
          .then((data) => this.queueAsyncJob(parsePost, data))
          .then(() => {
            if (callback) {
              callback();
            }
            this.donePartOfFetcher();
          })
          .catch(function (error) {
            console.log("request failed", error.message);
          });
      };
      fetch = async (more, location, parent, prefix, callback) => {
        callback = callback || null;
        try {
          if (!more) {
            await this.fetchUrl(
              this.url,
              this.status,
              this.json,
              this.parsePost,
              callback
            );
          } else {
            let listPromise = [];
            for (let item of this.moreChild) {
              const domain = "https://www.reddit.com";
              const url = domain + location + item + ".json";
              listPromise.push(
                this.fetchUrl(
                  url,
                  this.status,
                  this.json,
                  (json) => this.getCommentsFromJSON(json, parent, prefix),
                  callback
                )
              );
            }
            await Promise.all(listPromise);
          }
        } catch (e) {
          console.log(e);
        }
        
      };
      getCommentsFromJSON = async (json, parent, prefix = "") => {
        parent = parent || this.root;
        if (json[1].data.children[0]) {
          this.location = json[1].data.children[0].data.permalink;
          this.location = this.location.replace(
            "/" + json[1].data.children[0].data.id,
            ""
          );
        }
        return await this.getCommentsFromArray(
          json[1].data.children,
          parent,
          prefix
        );
      };
      //Recursively go through the object tree and compile all the comments
      getCommentsFromArray = async (arr, parent, prefix) => {
        let listMoreFetchPromise = [];
        arr.forEach((item) => {
          if (item.kind == "more") {
            this.moreChild = item.data.children;
            listMoreFetchPromise.push(
              this.fetch(true, this.location, parent, prefix)
            );            
          } else if (typeof item !== "undefined") {
            const data = this.helper.parseComment(item, prefix);
            if (data) {
              const newNode = { id: item.data.id, replies: [] };
              parent.replies.push(newNode);
              if(!this.isDataExist) this.db[this.id].put(item.data.id, data);
              if (
                typeof item.data.replies !== "undefined" &&
                item.data.replies !== ""
              ) {
                this.getCommentsFromArray(
                  item.data.replies.data.children,
                  newNode,
                  prefix + ">"
                );
              }
            }
          }
        });
        await Promise.all(listMoreFetchPromise);
      };
  }
  self.addEventListener(
      "message",
      event => {
      switch (event.data.cmd) {
          case "crawl": {
              const {url} = event.data.data;
              const fetcher = new Fetcher(url, () => {
                //console.log("Done fetch");
              });
              fetcher.fetch().then(async () => {
                self.postMessage({cmd: "crawl-result", data: JSON.stringify(fetcher.root), id: event.data.id});
              });                
              break;
          }
      }
      },
      false
  );
}
  