const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../app/models");
const router = express.Router();
const FoodReceivers = db.food_receivers;
const FoodDonors = db.food_donors;

db.sequelize.sync();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Try to find the user by email in the FoodReceivers table
  const receiver = await FoodReceivers.findOne({ where: { email } });
  // If not found, try to find the user by email in the FoodDonors table
  const donor = await FoodDonors.findOne({ where: { email } });
  // If neither found, return an error response
  if (!receiver && !donor) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  // Check if the password matches for the found user
  const user = receiver || donor;
  const passwordMatch = await bcrypt.compare(password, user.password);
  // If the password doesn't match, return an error response
  if (!passwordMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  // Password matches, user authenticated
  res.json({ message: "Authentication successful" });
});

module.exports = router;
