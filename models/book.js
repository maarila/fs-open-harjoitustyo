const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../util/db')

class Book extends Model {}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.TEXT,
    },
    originalTitle: {
      type: DataTypes.TEXT,
    },
    publishedYear: {
      type: DataTypes.INTEGER,
    },
    originalPublishedYear: {
      type: DataTypes.INTEGER,
    },
    seriesNumber: {
      type: DataTypes.INTEGER,
    },
    originalLanguage: {
      type: DataTypes.TEXT,
    },
    translator: {
      type: DataTypes.TEXT,
    },
    // maybe also printing (with default 1)?
    // maybe also language where translated from?
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    modelName: 'book',
  }
)

module.exports = Book
