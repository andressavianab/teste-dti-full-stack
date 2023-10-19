const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { authenticateDb } = require("./db/connection");
const { Petshop } = require("./models/PetshopModel");

authenticateDb();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/calc", async (req, res) => {
  const date = req.body.date;
  const quantitySmallDog = parseInt(req.body.quantitySmallDog);
  const quantityBigDog = parseInt(req.body.quantityBigDog);

  try {
    if (!date || !quantitySmallDog || !quantityBigDog) {
      return res
        .status(400)
        .send({ error: "Por favor, preencha todos os campos!" });
    }

    const [day, month, year] = date.split("-").map(Number);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      return res.status(400).send({ error: "Formato de data inválido." });
    }

    const inputDate = new Date(year, month - 1, day);
    const weekDay = inputDate.getDay();

    const petshops = await Petshop.findAll();

    let bestPetshop = null;
    let lowestTotalCost = Infinity;
    let smallDogPrice;
    let bigDogPrice;

    petshops.forEach((petshop) => {
      if (weekDay === 0 || weekDay === 6) {
        smallDogPrice = petshop.small_weekend_price;
        bigDogPrice = petshop.big_weekend_price;
      } else {
        smallDogPrice = petshop.small_week_price;
        bigDogPrice = petshop.big_week_price;
      }

      const totalCost =
        quantitySmallDog * smallDogPrice + quantityBigDog * bigDogPrice;

      if (totalCost < lowestTotalCost) {
        lowestTotalCost = totalCost;
        bestPetshop = petshop;
      } else if (totalCost === lowestTotalCost) {
        const distanceToBest = bestPetshop.location;
        const distanceToCurrent = petshop.location;

        if (distanceToCurrent < distanceToBest) {
          bestPetshop = petshop;
        }
      }
    });
    return res.status(200).json({
      bestPetshop: bestPetshop.name,
      totalCost: lowestTotalCost,
      distance: bestPetshop.location,
    });
  } catch (error) {
    return res.status(500).send({ error: "Internal server error." });
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
