const seedAuthors = [
  {
    name: 'Alan Paton',
    wiki_link: 'https://en.wikipedia.org/wiki/Alan_Paton',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    name: 'Niko Kazantzakis',
    wiki_link: 'https://en.wikipedia.org/wiki/Nikos_Kazantzakis',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    name: 'Heinrich Böll',
    wiki_link: 'https://en.wikipedia.org/wiki/Heinrich_B%C3%B6ll',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    name: 'Ernest Hemingway',
    wiki_link: 'https://en.wikipedia.org/wiki/Ernest_Hemingway',
    created_at: new Date(),
    updated_at: new Date(),
  },
];

async function up({ context: queryInterface }) {
  await queryInterface.bulkInsert('authors', seedAuthors);
}

async function down({ context: queryInterface }) {
  await queryInterface.bulkDelete('authors', {
    id: seedAuthors.map((author) => author.id),
  });
}

module.exports = { up, down };
