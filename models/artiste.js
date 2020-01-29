'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artiste = sequelize.define('Artiste', {
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    country: DataTypes.STRING,
    description: DataTypes.STRING,
    picture: DataTypes.STRING
  }, {});
  Artiste.associate = function(models) {
    // associations can be defined here
  };
  return Artiste;
};