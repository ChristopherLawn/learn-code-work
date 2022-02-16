// Import Sequelize
const Sequelize = require('sequelize');

// Require 'dotenv'
require('dotenv').config();

// Create 'sequelize' global variable for export
let sequelize;

// Create connection to database and pass in MySQL information for username and password
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

// Export sequelize connection
module.exports = sequelize;