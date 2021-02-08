const  Sequelize  = require('sequelize');
module.exports = new Sequelize({
    dialect: 'sqlite',
    storage: './db.development.sqlite',
    username: "manifestUser",
    password: "manifestPassword",
    database: "SimpleBlogDB",
    host: "manifestdbinstance.cgq0reqixqsd.us-east-1.rds.amazonaws.com",
    dialect: 'postgres'
});  


