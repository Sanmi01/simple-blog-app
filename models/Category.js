'use strict';
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    specification: DataTypes.STRING
  });

  return Category;
};