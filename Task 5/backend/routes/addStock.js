const express = require("express");
const db = require("../app/models");
const router = express.Router();
const FoodStock = db.food_stock;

db.sequelize.sync();

router.post("/addstocks", async (req, res) => {
  const { name, quantity, category_of_food, expiry_date, foodDonorId } =
    req.body;
  try {
    // if (receiver_type === "regular user" || receiver_type === "orphanage") {
    const food_stock = await FoodStock.create({
      category_of_food: category_of_food,
      expiry_date: expiry_date,
      name: name,
      quantity: quantity,
      foodDonorId: foodDonorId,
    });
    res.status(201).json(food_stock);
    // }
    // else {
    //   const donor_type = receiver_type;
    //   const donors = await FoodDonors.create({
    //     contact: contact,
    //     email: email,
    //     location: location,
    //     name: name,
    //     password: hashedPassword,
    //     donor_type: donor_type,
    //   });
    //   res.status(201).json(donors);
    // }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
