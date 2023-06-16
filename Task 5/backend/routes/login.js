const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
    return res.status(401).json({ auth: false, message: "no user exists" });
  }
  // Check if the password matches for the found user
  const user = receiver || donor;
  const passwordMatch = await bcrypt.compare(password, user.password);
  // If the password doesn't match, return an error response
  if (!passwordMatch) {
    return res
      .status(401)
      .json({ auth: false, message: "Invalid email or password" });
  }
  // Password matches, user authenticated
  // Generate a JWT with the user's ID as payload
  const token = jwt.sign({ id: user.id }, "jwtSecret", { expiresIn: 300 });
  // Send the JWT in the response
  res.json({ auth: true, token: token, message: "Authentication successful" });
});

module.exports = router;
