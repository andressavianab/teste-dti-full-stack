const { Sequelize } = require("sequelize");
require('dotenv').config();

const connection = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host: process.env.HOST,
  dialect: "mysql",
});

const authenticateDb = async () => {
  try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { authenticateDb, connection };
