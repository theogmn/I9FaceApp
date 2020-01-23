const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('faces', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate();
  

module.exports = sequelize;