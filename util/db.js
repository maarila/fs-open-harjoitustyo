const Sequelize = require('sequelize')
const { DATABASE_URL } = require('./config')

const sequelize = new Sequelize(DATABASE_URL, {
  logging: console.log,
})

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connected to the database')
  } catch (err) {
    console.log('Failed connecting to the database')
    return process.exit(1)
  }

  return null
}

module.exports = { connectToDatabase, sequelize }
