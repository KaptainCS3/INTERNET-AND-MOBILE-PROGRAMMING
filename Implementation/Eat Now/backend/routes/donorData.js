const express = require("express");
const db = require("../app/models");
const router = express.Router();
const allFood = db.food_donors;

router.get("/donors", async (req, res, next) => {
  try {
    const products = await allFood.findAll();
    res.json({ products });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve products" });
  }
});

module.exports = router;
