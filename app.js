const express = require('express')
const cors = require('cors')
const { connectToDatabase } = require('./util/db')
const booksRouter = require('./controllers/books')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/books', booksRouter)

const start = async () => {
  await connectToDatabase()
}

start()

module.exports = app
