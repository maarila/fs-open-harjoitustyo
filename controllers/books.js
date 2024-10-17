const router = require('express').Router();
const { Book } = require('../models');

const bookFinder = async (req, res, next) => {
  req.book = await Book.findByPk(req.params.id);
  next();
};

router.get('/', async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

router.get('/:id', bookFinder, async (req, res) => {
  if (req.book) {
    res.json(req.book);
  } else {
    res.status(404).end();
  }
});

router.post('/', async (req, res) => {
  const book = await Book.create(req.body);
  res.json(book);
});

router.put('/:id', bookFinder, async (req, res) => {
  const currentBook = req.book;
  if (currentBook) {
    req.book.title = req.body.title;
    req.book.originalTitle = req.body.originalTitle;
    req.book.publishedYear = req.body.publishedYear;
    req.book.originalPublishedYear = req.body.originalPublishedYear;
    req.book.seriesNumber = req.body.seriesNumber;
    req.book.originalLanguage = req.body.originalLanguage;
    req.book.translator = req.body.translator;
    req.book.imagePath = req.body.imagePath;
    await req.book.save();
    res.json(req.book);
  } else {
    res.status(404).end();
  }
});

router.delete('/:id', bookFinder, async (req, res) => {
  if (req.book) {
    await req.book.destroy();
  }
  res.status(204).end();
});

module.exports = router;
