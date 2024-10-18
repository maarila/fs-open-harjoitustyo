const router = require('express').Router();
const { Author } = require('../models');

const authorFinder = async (req, res, next) => {
  req.author = await Author.findByPk(req.params.id);
  next();
};

router.get('/', async (req, res) => {
  const authors = await Author.findAll();
  res.json(authors);
});

router.get('/:id', authorFinder, async (req, res) => {
  if (req.author) {
    res.json(req.author);
  } else {
    res.status(404).end();
  }
});

router.post('/', async (req, res) => {
  const author = await Author.create(req.body);
  res.json(author);
});

router.put('/:id', authorFinder, async (req, res) => {
  const currentAuthor = req.author;
  if (currentAuthor) {
    currentAuthor.name = req.body.name;
    currentAuthor.wikiLink = req.body.wikiLink;
    await currentAuthor.save();
    res.json(currentAuthor);
  } else {
    res.status(404).end();
  }
});

router.delete('/:id', authorFinder, async (req, res) => {
  if (req.author) {
    await req.author.destroy();
  }
  res.status(204).end();
});

module.exports = router;
