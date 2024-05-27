import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {
  try {
    // Зчитування існуючих контактів з файлу db.json
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    // Генерація нових контактів
    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );

    // Додавання нових контактів
    const updatedContacts = [...contacts, ...newContacts];

    // Оновлений масив контактів
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));

    console.log(`Успішно згенеровано та додано ${number} контактів до db.json`);
  } catch (err) {
    console.error(
      'Помилка при генерації та додаванні контактів до db.json',
      err,
    );
  }
};

await generateContacts(5);
