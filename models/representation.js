'use strict';
module.exports = (sequelize, DataTypes) => {
  const Representation = sequelize.define('Representation', {
    city: DataTypes.STRING,
    ticket_price: DataTypes.INTEGER,
    date: DataTypes.DATE,
    ticket_available: DataTypes.INTEGER,
    ticket_sold: DataTypes.INTEGER
  }, {});
  Representation.associate = function(models) {
    // associations can be defined here
  };
  return Representation;
};