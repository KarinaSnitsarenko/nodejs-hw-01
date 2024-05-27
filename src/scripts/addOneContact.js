import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    // Зчитування існуючих контактів з файлу db.json
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    // Генерація
    const newContact = createFakeContact();

    // Додавання нового контакту
    contacts.push(newContact);

    // Запис оновленого масиву контактів назад до файлу db.json
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');

    console.log('Новий контакт успішно додано:', newContact);
  } catch (err) {
    console.error('Помилка при додаванні нового контакту:', err);
  }
};

await addOneContact();
