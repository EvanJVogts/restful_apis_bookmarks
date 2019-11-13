require('dotenv').config();
const { TEST_DB_URL, DB_URL } = require('./src/config');

module.exports = {
  'migrationDirectory': 'migrations',
  'driver': 'pg',
  'connectionString': (process.env.NODE_ENV === 'test')
    ? TEST_DB_URL
    : DB_URL,
};