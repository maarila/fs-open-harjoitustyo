const seedBooks = [
  {
    title: 'Ei sanonut sanaakaan',
    original_title: 'Und sagte kein einziges Wort',
    published_year: 1954,
    original_published_year: 1953,
    series_number: 3,
    original_language: 'saksa',
    translator: 'Kristiina Kivivuori',
    image_path: '/3-ei-sanonut-sanaakaan.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    title: 'Ja aurinko nousee',
    original_title: 'The Sun Also Rises',
    published_year: 1954,
    original_published_year: 1926,
    series_number: 4,
    original_language: 'englanti',
    translator: 'Jouko Linturi',
    image_path: '/4-ja-aurinko-nousee.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  },
];

async function up({ context: queryInterface }) {
  await queryInterface.bulkInsert('books', seedBooks);
}

module.exports = { up };
