const Sequelize = require('sequelize');
const db = require('../config/database');

const Category = db.define('Category', {
    name: DataTypes.STRING,
    specification: DataTypes.STRING
})


module.exports = Category;