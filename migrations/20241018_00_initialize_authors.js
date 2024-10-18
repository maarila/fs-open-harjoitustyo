const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
  await queryInterface.createTable('authors', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    wiki_link: {
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
  await queryInterface.addColumn('books', 'author_id', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: { model: 'authors', key: 'id' },
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable('authors');
}

module.exports = { up, down };
