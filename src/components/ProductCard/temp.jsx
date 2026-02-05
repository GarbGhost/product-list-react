import { openDB } from 'idb';

let dbPromise = null;

// 1. Открываем базу. Функция async позволяет нам использовать await внутри.
const openDatabase = async () => {
  // Мы создаем "обещание" (Promise) базы данных
  dbPromise = openDB('ProductDatabase', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('products')) {
        db.createObjectStore('products', { keyPath: 'id' });
      }
    },
  });
  return dbPromise;
};

// 2. Сохраняем данные
const saveToDatabase = async (products) => {
  const db = await dbPromise; // Ждем, пока база откроется, если она еще не готова
  
  // Создаем транзакцию (чтение и запись)
  const tx = db.transaction('products', 'readwrite');
  const store = tx.objectStore('products');

  await store.clear(); // Ждем очистки
  
  // Добавляем все товары
  for (const product of products) {
    await store.put(product); 
  }

  // Ждем, пока вся транзакция завершится
  await tx.done;
};

// 3. Загружаем данные
const loadFromDatabase = async () => {
  const db = await dbPromise;
  // Здесь транзакция создается автоматически (для простых операций)
  return await db.getAll('products'); 
};

export default { openDatabase, saveToDatabase, loadFromDatabase };
