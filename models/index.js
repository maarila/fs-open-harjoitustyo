const Book = require('./book')
const Author = require('./author')
const Review = require('./review')
const User = require('./user')

// Book.hasMany(Review)
// Review.belongsTo(Book)
// User.hasMany(Review)
// Review.belongsTo(User)
// Author.hasMany(Book)
// Book.belongsTo(Author)
// still missing many-to-many relation Book-User

module.exports = {
  Book,
  Author,
  Review,
  User,
}
