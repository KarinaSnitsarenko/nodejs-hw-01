import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]));
    console.log('Всі контакти видалено.');
  } catch (err) {
    console.error('Помилка при видаленні контактів:', err);
  }
};

await removeAllContacts();
