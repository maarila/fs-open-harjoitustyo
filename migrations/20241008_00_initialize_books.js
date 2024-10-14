const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
  await queryInterface.createTable('books', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    original_title: {
      type: Sequelize.TEXT,
    },
    published_year: {
      type: Sequelize.INTEGER,
    },
    original_published_year: {
      type: Sequelize.INTEGER,
    },
    series_number: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    original_language: {
      type: Sequelize.TEXT,
    },
    translator: {
      type: Sequelize.TEXT,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable('books');
}

module.exports = { up, down };
