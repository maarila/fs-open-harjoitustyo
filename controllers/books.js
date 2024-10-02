const router = require('express').Router()
const { Book } = require('../models')

const bookFinder = async (req, res, next) => {
  req.book = await Book.findByPk(req.params.id)
  next()
}

router.get('/', async (req, res) => {
  const books = await Book.findAll()
  res.json(books)
})

router.get('/:id', bookFinder, async (req, res) => {
  if (req.book) {
    res.json(req.book)
  } else {
    res.status(404).end()
  }
})

router.post('/', async (req, res) => {
  console.log(req.body)
  const book = await Book.create(req.body)
  res.json(book)
})

router.put('/:id', bookFinder, async (req, res) => {
  if (req.book) {
    // do necessary changes
    await req.book.save()
    res.json(req.book)
  } else {
    res.status(404).end()
  }
})

router.delete('/:id', bookFinder, async (req, res) => {
  if (req.book) {
    await req.book.destroy()
  }
  res.status(204).end()
})

module.exports = router
