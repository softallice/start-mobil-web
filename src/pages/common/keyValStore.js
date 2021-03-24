/**
 * KeyValueStore is key value based store
 * @class
 */
 export class KeyValueStore {
    constructor(dbName, storeName) {
      if (!dbName || !storeName) {
        // eslint-disable-next-line no-throw-literal
        throw "db와 store는 필수입니다.";
      }
  
      this.dbName = dbName;
      this.storeName = storeName;
    }
  
    async getAll() {
      const dbName = this.dbName;
      const storeName = this.storeName;
  
      return new Promise(function(resolve) {
        const openDB = indexedDB.open(dbName, 1);
  
        openDB.onupgradeneeded = function() {
          var db = {};
          db.result = openDB.result;
          db.store = db.result.createObjectStore(storeName, { keyPath: "id" });
        };
  
        openDB.onsuccess = function() {
          const db = {};
          db.result = openDB.result;
          db.tx = db.result.transaction(storeName, "readonly");
          db.store = db.tx.objectStore(storeName);
          const request = db.store.getAll();
          request.onsuccess = function() {
            resolve(request.result);
          };
        };
      });
    }
  
    async get(id) {
      const dbName = this.dbName;
      const storeName = this.storeName;
  
      return new Promise(function(resolve) {
        var openDB = indexedDB.open(dbName, 1);
  
        openDB.onupgradeneeded = function() {
          var db = {};
          db.result = openDB.result;
          db.store = db.result.createObjectStore(storeName, { keyPath: "id" });
        };
  
        openDB.onsuccess = function() {
          var db = {};
          db.result = openDB.result;
          db.tx = db.result.transaction(storeName, "readonly");
          db.store = db.tx.objectStore(storeName);
          const getData = db.store.get(id);
          getData.onsuccess = function() {
            resolve(getData.result);
          };
  
          db.tx.oncomplete = function() {
            db.result.close();
          };
        };
      });
    }
  
    async store(id, value) {
      const dbName = this.dbName;
      const storeName = this.storeName;
  
      return new Promise(function(resolve) {
        var openDB = indexedDB.open(dbName, 1);
  
        openDB.onupgradeneeded = function() {
          var db = {};
          db.result = openDB.result;
          db.store = db.result.createObjectStore(storeName, { keyPath: "id" });
        };
  
        if (!value.id) {
          value.id = id;
        }
  
        openDB.onsuccess = function() {
          console.log("save on success");
          var db = {};
          db.result = openDB.result;
          db.tx = db.result.transaction(storeName, "readwrite");
          db.store = db.tx.objectStore(storeName);
          db.store.put(value);
          resolve();
        };
      });
    }
  
    async clear() {
      const dbName = this.dbName;
      const storeName = this.storeName;
  
      return new Promise(function(resolve) {
        const openDB = indexedDB.open(dbName, 1);
  
        openDB.onupgradeneeded = function() {
          var db = {};
          db.result = openDB.result;
          db.store = db.result.createObjectStore(storeName, { keyPath: "id" });
        };
  
        openDB.onsuccess = function() {
          const db = {};
          db.result = openDB.result;
          db.tx = db.result.transaction(storeName, "readwrite");
          db.store = db.tx.objectStore(storeName);
          const request = db.store.clear();
          request.onsuccess = function() {
            resolve();
          };
        };
      });
    }
  }
  