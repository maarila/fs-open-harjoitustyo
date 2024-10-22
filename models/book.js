const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../util/db');

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
      allowNull: false,
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
      allowNull: false,
    },
    originalLanguage: {
      type: DataTypes.TEXT,
    },
    translationLanguage: {
      type: DataTypes.TEXT,
    },
    translator: {
      type: DataTypes.TEXT,
    },
    imagePath: {
      type: DataTypes.TEXT,
    },
    pageCount: {
      type: DataTypes.INTEGER,
    },
    printing: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    authorId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    modelName: 'book',
  }
);

module.exports = Book;
