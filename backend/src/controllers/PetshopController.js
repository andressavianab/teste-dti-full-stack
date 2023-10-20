const app = require("express");
const router = app.Router();
const Petshop = require("../models/PetshopModel");

router.post("/petshop/save", async (req, res) => {
  const {
    name,
    location,
    small_week_price,
    big_week_price,
    small_weekend_price,
    big_weekend_price,
  } = req.body;

  if (
    !name ||
    !location ||
    !small_week_price ||
    !big_week_price ||
    !small_weekend_price ||
    !big_weekend_price
  ) {
    return res
      .status(400)
      .send({ error: "Por favor, preencha todos os campos!" });
  }

  if (
    isNaN(location) ||
    isNaN(small_week_price) ||
    isNaN(big_week_price) ||
    isNaN(small_weekend_price) ||
    isNaN(big_weekend_price)
  ) {
    res.status(400).send({
      error:
        "Os campos de preço e localização devem ser preechidos com valores númericos.",
    });
    return;
  }

  try {
    const newPetshop = await Petshop.create({
      name: name,
      location: location,
      small_week_price: small_week_price,
      big_week_price: big_week_price,
      small_weekend_price: small_weekend_price,
      big_weekend_price: big_weekend_price,
    });
    res.status(201).send({ message: "Petshop criado com sucesso!" });
    return;
  } catch (error) {
    console.log(error);
  }
});

router.get("/petshops", async (req, res) => {
  try {
    const petshops = await Petshop.findAll();
    res.status(200).json(petshops);
    return;
  } catch (error) {
    console.log(error);
  }
});

router.delete("/petshop/:id", async (req, res) => {
  const id = req.params.id;

  if (isNaN(id)) {
    res.status(400).send({ error: "Por favor, envie um parametro numérico." });
    return;
  }

  try {
    const petshop = await Petshop.findOne({
      where: {
        id: id,
      },
    });
    if (petshop == undefined) {
      res.status(404).send({
        error: `Nenhum petshop que corresponda ao id: ${id} encontrado.`,
      });
      return;
    }

    await petshop.destroy({});
    res.status(200).send({ message: "Petshop removido com sucesso!" });
  } catch (error) {
    console.log(error);
  }
});

router.put("/petshop/:id", async (req, res) => {
  const id = req.params.id;

  if (isNaN(id)) {
    res.status(400).send({ error: "Por favor, envie um parametro numérico." });
    return;
  }

  try {
    const petshop = await Petshop.findOne({
      where: {
        id: id,
      },
    });

    if (petshop == undefined) {
      res.status(404).send({
        error: `Nenhum petshop que corresponda ao id: ${id} encontrado.`,
      });
      return;
    }

    const {
      name,
      location,
      small_week_price,
      big_week_price,
      small_weekend_price,
      big_weekend_price,
    } = req.body;

    if (name != undefined) {
      petshop.name = name;
    }

    if (location != undefined) {
      petshop.location = location;
    }

    if (small_week_price != undefined) {
      petshop.small_week_price = small_week_price;
    }

    if (big_week_price != undefined) {
      petshop.big_week_price = big_week_price;
    }

    if (small_weekend_price != undefined) {
      petshop.small_weekend_price = small_weekend_price;
    }

    if (big_weekend_price != undefined) {
      petshop.big_weekend_price = big_weekend_price;
    }

    await petshop.update({
      name: name,
      location: location,
      small_week_price: small_week_price,
      big_week_price: big_week_price,
      small_weekend_price: small_weekend_price,
      big_weekend_price: big_weekend_price,
    });
    res.status(200).send({ message: "Petshop atualizado com sucesso!" });
    return;
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
