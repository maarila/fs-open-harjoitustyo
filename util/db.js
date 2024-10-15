const Sequelize = require('sequelize');
const { DATABASE_URL } = require('./config');
const { Umzug, SequelizeStorage } = require('umzug');

const sequelize = new Sequelize(DATABASE_URL, {
  logging: console.log,
  dialect: 'postgres',
});

const runMigrations = async () => {
  const migrator = new Umzug({
    migrations: {
      glob: 'migrations/*.js',
    },
    storage: new SequelizeStorage({ sequelize, tableName: 'migrations' }),
    context: sequelize.getQueryInterface(),
    logger: console,
  });

  const migrations = await migrator.up();

  console.log('Migrations up to date', {
    files: migrations.map((migration) => migration.name),
  });
};

const runSeeder = async () => {
  const seeder = new Umzug({
    migrations: {
      glob: 'seeders/*.js',
    },
    storage: new SequelizeStorage({ sequelize, tableName: 'seeder_meta' }),
    context: sequelize.getQueryInterface(),
    logger: console,
  });

  const seeds = await seeder.up();

  console.log('Seeds up to date', {
    files: seeds.map((seed) => seed.name),
  });
};

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await runMigrations();
    await runSeeder();
    console.log('Connected to the database');
  } catch (error) {
    console.log(
      'Failed connecting to the database with error: ',
      error.message
    );
    return process.exit(1);
  }

  return null;
};

module.exports = { connectToDatabase, sequelize };
