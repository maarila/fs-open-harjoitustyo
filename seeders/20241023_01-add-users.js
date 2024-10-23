const seedUsers = [
  {
    name: 'Testi Käyttäjä',
    username: 'test',
    passwordHash: 'asdf',
    role: 'admin',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    name: 'E. Esimerkki',
    username: 'esimerkki',
    passwordHash: 'asdfsadf',
    role: 'user',
    created_at: new Date(),
    updated_at: new Date(),
  },
];

async function up({ context: queryInterface }) {
  await queryInterface.bulkInsert('users', seedUsers);
}

async function down({ context: queryInterface }) {
  await queryInterface.bulkDelete('users', {
    id: seedUsers.map((user) => user.id),
  });
}

module.exports = { up, down };
