const { test, beforeEach, after } = require('node:test');
const assert = require('node:assert');
const { sequelize } = require('../util/db');
const supertest = require('supertest');
const Book = require('../models/book');
const app = require('../app');

const api = supertest(app);

const seedBooks = [
  {
    title: 'Liian myöhään vesipääsky',
    originalTitle: 'Too Late the Phalarope',
    publishedYear: 1954,
    originalPublishedYear: 1953,
    seriesNumber: 1,
    originalLanguage: 'englanti',
    translator: 'Jouko Linturi',
  },
  {
    title: 'Kerro minulle, Zorbas',
    originalTitle: 'Víos ke politía tu Aléksi Zorbá',
    publishedYear: 1954,
    originalPublishedYear: 1946,
    seriesNumber: 2,
    originalLanguage: 'kreikka',
    translator: 'Vappu Roos',
  },
];

beforeEach(async () => {
  await Book.destroy({
    where: {},
  });
  let starterBook = new Book(seedBooks[0]);
  await starterBook.save();
  starterBook = new Book(seedBooks[1]);
  await starterBook.save();
});

test('books are returned as json', async () => {
  await api
    .get('/api/books')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

test('there are two books', async () => {
  const response = await api.get('/api/books');

  assert.strictEqual(response.body.length, 2);
});

test('the first book is written in 1954', async () => {
  const response = await api.get('/api/books');

  const contents = response.body.map((e) => e.publishedYear);
  assert(contents.includes(1954));
});

after(async () => {
  await sequelize.close();
});
