const Book = require('./book')
const Author = require('./author')
const Review = require('./review')
const User = require('./user')

Book.hasMany(Review)
Review.belongsTo(Book)
Author.hasMany(Book)
Book.belongsTo(Author)
// still missing many-to-many relation Book-User

Book.sync({ alter: true })
Author.sync({ alter: true })
Review.sync({ alter: true })
User.sync({ alter: true })

module.exports = {
  Book,
  Author,
  Review,
  User,
}
