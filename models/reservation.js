'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    name: DataTypes.STRING,
    number_ticket: DataTypes.INTEGER,
    email: DataTypes.STRING,
    phone_number: DataTypes.INTEGER,
    city: DataTypes.STRING,
    date: DataTypes.DATE
  }, {});
  Reservation.associate = function(models) {
    // associations can be defined here
  };
  return Reservation;
};