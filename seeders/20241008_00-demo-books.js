const seedBooks = [
  {
    title: 'Liian myöhään vesipääsky',
    original_title: 'Too Late the Phalarope',
    published_year: 1954,
    original_published_year: 1953,
    series_number: 1,
    original_language: 'englanti',
    translator: 'Jouko Linturi',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    title: 'Kerro minulle, Zorbas',
    original_title: 'Víos ke politía tu Aléksi Zorbá',
    published_year: 1954,
    original_published_year: 1946,
    series_number: 2,
    original_language: 'kreikka',
    translator: 'Vappu Roos',
    created_at: new Date(),
    updated_at: new Date(),
  },
];

async function up({ context: queryInterface }) {
  await queryInterface.bulkInsert('books', seedBooks);
}

async function down({ context: queryInterface }) {
  await queryInterface.bulkDelete('books', {
    seriesNumber: seedBooks.map((book) => book.series_number),
  });
}

module.exports = { up, down };
