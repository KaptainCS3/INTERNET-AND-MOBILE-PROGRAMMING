const express = require("express");
const db = require("../app/models");
const router = express.Router();
const FoodStock = db.food_stocks;

db.sequelize.sync();

router.post("/addstocks", async (req, res) => {
  const { name, quantity, category_of_food, expiry_date, foodDonorId } =
    req.body;
  try {
    const food_stock = await FoodStock.create({
      category_of_food: category_of_food,
      expiry_date: expiry_date,
      name: name,
      quantity: quantity,
      foodDonorId: foodDonorId,
    });
    res.status(201).json(food_stock);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
