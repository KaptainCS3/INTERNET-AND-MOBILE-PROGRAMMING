const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../app/models");
const router = express.Router();
const FoodReceivers = db.food_receivers;
const FoodDonors = db.food_donors;

db.sequelize.sync();

router.post("/signup", async (req, res) => {
  const { name, email, contact, location, password, receiver_type } = req.body;
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    //deceives insertion to tables
    if (receiver_type === "regular user" || receiver_type === "orphanage") {
      const receivers = await FoodReceivers.create({
        contact: contact,
        email: email,
        location: location,
        name: name,
        password: hashedPassword,
        receiver_type: receiver_type,
      });
      res.status(201).json(receivers);
    } else {
      const donor_type = receiver_type;
      const donors = await FoodDonors.create({
        contact: contact,
        email: email,
        location: location,
        name: name,
        password: hashedPassword,
        donor_type: donor_type,
      });
      res.status(201).json(donors);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
