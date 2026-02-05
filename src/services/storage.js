import { openDB } from 'idb';

let dbPromise = null;


const openDatabase = async () => {

  dbPromise = openDB('ProductDatabase', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('products')) {
        db.createObjectStore('products', { keyPath: 'id' });
      }
    },
  });
  return dbPromise;
};

const addProductToDatabase = async (product) => {
  if (!dbPromise) await openDatabase();
  const db = await dbPromise;
  await db.put('products', product);
};

// const saveToDatabase = async (products) => {
//   const db = await dbPromise; 
  

//   const tx = db.transaction('products', 'readwrite');
//   const store = tx.objectStore('products');

//   await store.clear(); 
  

//   for (const product of products) {
//     await store.put(product); 
//   }


//   await tx.done;
// };

const loadFromDatabase = async () => {
  const db = await dbPromise;

  return await db.getAll('products'); 
};

const deleteProductFromDatabase = async (id) => {
  const db = await dbPromise;
  await db.delete('products', id);
};

export default { openDatabase, addProductToDatabase, loadFromDatabase, deleteProductFromDatabase };
