const express = require('express')
const { connectToDatabase } = require('./util/db')
const booksRouter = require('./controllers/books')

const app = express()

app.use(express.json())
app.use('/api/books', booksRouter)

const start = async () => {
  await connectToDatabase()
}

start()

module.exports = app
