require('dotenv').config()
const express = require('express')
const { Sequelize, Model, DataTypes } = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_URL)

const app = express()

app.get('/', async (req, res) => {
  res.send('Hello Wooorld!')
})

class Book extends Model {}

Book.init({
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  author: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  title: {
      type: DataTypes.BOOLEAN
    },
  published: {
      type: DataTypes.INTEGER
    }
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'book'
})


const PORT = process.env.PORT || 3001

const start = async () => {
  await sequelize.authenticate()
  console.log('Connected to the database')
  const books = await Book.findAll()
  console.log(books)
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

start()
