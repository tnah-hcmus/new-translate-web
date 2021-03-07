if( 'function' === typeof importScripts) {
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
        return {
          subReddit: postInfo.subreddit_name_prefixed,
          shortenLink: "https://redd.it/" + postInfo.id,
          title: postInfo.title,
          text: postInfo.selftext,
          awards: this.getAward(postInfo),
          author: "u/" + postInfo.author,
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
          return {
            id: commentInfo.data.id,
            upvotes: this.upvoteParse(parseInt(commentInfo.data.ups)),
            author: "u/" + commentInfo.data.author,
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
        this.callback = callback;
        this.moreChild = [];
        this.db = new IDBWrapper("reddit-post");
        this.fetcherWorkings = 0;
        this.totalFetcher = 0;
        this.current = 0;
        this.maxBatch = 5;
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
        await this.db.openCollection(this.id, "id");
        this.db[this.id].put(this.id, bodyRoot);
        await this.getCommentsFromJSON(json);
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
              this.db[this.id].put(item.data.id, data);
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
  