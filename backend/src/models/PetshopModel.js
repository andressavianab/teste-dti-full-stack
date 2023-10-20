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

const createPetshop = async () => {
  try {
    await Petshop.findOrCreate({
      where: {
        name: "Meu Canino Feliz",
        location: 2000,
        small_week_price: 20.0,
        big_week_price: 40.0,
        small_weekend_price: 24.0,
        big_weekend_price: 48.0,
      },
      defaults: {
        name: "Meu Canino Feliz",
        location: 2000,
        small_week_price: 20.0,
        big_week_price: 40.0,
        small_weekend_price: 24.0,
        big_weekend_price: 48.0,
      },
    });
    await Petshop.findOrCreate({
      where: {
        name: "Vai Rex",
        location: 1700,
        small_week_price: 15.0,
        big_week_price: 50.0,
        small_weekend_price: 20.0,
        big_weekend_price: 55.0,
      },
      defaults: {
        name: "Vai Rex",
        location: 1700,
        small_week_price: 15.0,
        big_week_price: 50.0,
        small_weekend_price: 20.0,
        big_weekend_price: 55.0,
      },
    });

    await Petshop.findOrCreate({
      where: {
        name: "ChowChawgas",
        location: 800,
        small_week_price: 30.0,
        big_week_price: 45.0,
        small_weekend_price: 30.0,
        big_weekend_price: 45.0,
      },
      defaults: {
        name: "ChowChawgas",
        location: 800,
        small_week_price: 30.0,
        big_week_price: 45.0,
        small_weekend_price: 30.0,
        big_weekend_price: 45.0,
      },
    });
  } catch (error) {
    console.error("Error creating the petshops:", error);
  }
};

connection
  .sync({ force: false })
  .then(() => {
    createPetshop();
  })
  .catch((error) => {
    console.error("Database synchronization error:", error);
  });

module.exports =  Petshop;
