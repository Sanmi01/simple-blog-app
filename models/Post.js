const Sequelize = require('sequelize');
const db = require('../config/database');

const Post = db.define('Post', {
    post_title: DataTypes.STRING,
    post_body: DataTypes.STRING,
})


module.exports = Post;