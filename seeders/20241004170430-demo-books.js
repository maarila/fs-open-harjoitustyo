'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Books',
      [
        {
          title: 'Liian myöhään vesipääsky',
          originalTitle: 'Too Late the Phalarope',
          publishedYear: 1954,
          originalPublishedYear: 1953,
          seriesNumber: 1,
          originalLanguage: 'englanti',
          translator: 'Jouko Linturi',
        },
        {
          title: 'Kerro minulle, Zorbas',
          originalTitle: 'Víos ke politía tu Aléksi Zorbá',
          publishedYear: 1954,
          originalPublishedYear: 1946,
          seriesNumber: 2,
          originalLanguage: 'kreikka',
          translator: 'Vappu Roos',
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {})
  },
}
