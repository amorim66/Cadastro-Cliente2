const Sequelize = require('sequelize');
const sequelize = new Sequelize('webii', 'root', '24017878', {dialect: 'mysql', host: 'localhost', port:3306})

module.exports = {sequelize}