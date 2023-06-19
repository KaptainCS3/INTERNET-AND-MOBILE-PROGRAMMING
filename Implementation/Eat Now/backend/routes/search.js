const express = require("express");
const db = require("../app/models");
const router = express.Router();
const FoodStock = db.food_stocks;

router.post("/search", async (req, res) => {
  const { name } = req.body;
  const search = await FoodStock.findOne({ where: { name } });
  if (!search) {
    return res.status(404).json({ message: "Product not Found!!!" });
  } else {
    return res.status(200).json({
      message: "congrats Product Found!!!!",
      isFound: search,
    });
  }
});

module.exports = router;
