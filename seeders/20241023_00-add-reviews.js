const seedReviews = [
  {
    rating: 4,
    description: 'Nice book, very good.',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    rating: 1,
    description: 'Not nice book, not very good.',
    created_at: new Date(),
    updated_at: new Date(),
  },
];

async function up({ context: queryInterface }) {
  await queryInterface.bulkInsert('reviews', seedReviews);
}

async function down({ context: queryInterface }) {
  await queryInterface.bulkDelete('reviews', {
    id: seedReviews.map((review) => review.id),
  });
}

module.exports = { up, down };
