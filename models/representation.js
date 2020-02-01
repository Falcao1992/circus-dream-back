'use strict';
module.exports = (sequelize, DataTypes) => {
  const Representation = sequelize.define('Representation', {
    city: DataTypes.STRING,
    ticket_price: DataTypes.INTEGER,
    date: DataTypes.DATE,
    hours: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER,
    ticket_sold: DataTypes.INTEGER
  }, {});
  Representation.associate = function(models) {
    // associations can be defined here
  };
  return Representation;
};