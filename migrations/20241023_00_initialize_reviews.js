const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
  await queryInterface.createTable('reviews', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    description: {
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
  await queryInterface.addColumn('books', 'review_id', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: { model: 'reviews', key: 'id' },
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable('reviews');
}

module.exports = { up, down };
