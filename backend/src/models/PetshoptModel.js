const { DataTypes } = require("sequelize");
const { connection } = require("../db/connection");

const Petshop = connection.define(
  "Petshop",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    small_week_price: {
      type: DataTypes.FLOAT(4, 2),
      allowNull: false,
    },
    big_week_price: {
      type: DataTypes.FLOAT(4, 2),
      allowNull: false,
    },
    small_weekend_price: {
      type: DataTypes.FLOAT(4, 2),
      allowNull: false,
    },
    big_weekend_price: {
      type: DataTypes.FLOAT(4, 2),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Petshop.sync({ force: false });

module.exports =  Petshop;