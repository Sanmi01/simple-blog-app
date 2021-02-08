const Sequelize = require('sequelize');
const db = require('../config/database');

const Comment = db.define('Comment', {
    title: DataTypes.STRING,
    username: DataTypes.STRING,
    body: DataTypes.STRING,
})


module.exports = Comment;