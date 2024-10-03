const { test, beforeEach, after } = require('node:test')
const assert = require('node:assert')
const { sequelize } = require('../util/db')
const supertest = require('supertest')
const Book = require('../models/book')
const app = require('../app')

const api = supertest(app)

const seedBooks = [
  {
    author: 'Test Surname',
    title: false,
    published: 1999,
  },
  {
    author: 'Second Testname',
    title: true,
    published: 1875,
  },
]

beforeEach(async () => {
  await Book.destroy({
    where: {},
  })
  let starterBook = new Book(seedBooks[0])
  await starterBook.save()
  starterBook = new Book(seedBooks[1])
  await starterBook.save()
})

test('books are returned as json', async () => {
  await api
    .get('/api/books')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('there are two books', async () => {
  const response = await api.get('/api/books')

  assert.strictEqual(response.body.length, 2)
})

test('the first book is written in 1999', async () => {
  const response = await api.get('/api/books')

  const contents = response.body.map((e) => e.published)
  assert(contents.includes(1999))
})

after(async () => {
  await sequelize.close()
})
