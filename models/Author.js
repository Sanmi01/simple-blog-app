const Sequelize = require('sequelize');
const db = require('../config/database');

const Author = db.define('Author', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
    }},
})


module.exports = Author;