const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./util/db');
const booksRouter = require('./controllers/books');
const authorsRouter = require('./controllers/authors');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/books', booksRouter);
app.use('/api/authors', authorsRouter);

const start = async () => {
  await connectToDatabase();
};

start();

module.exports = app;
