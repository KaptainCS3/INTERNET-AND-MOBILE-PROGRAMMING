const express = require("express");
const bcrypt = require("bcrypt");
const { createClient } = require("@supabase/supabase-js");
const db = require("../app/models");
const router = express.Router();

// Create a Superbase client
const supabaseUrl = process.env.VITE_PROJECT_URL;
const supabaseKey = process.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

db.sequelize.sync();

router.post("/signup", async (req, res) => {
  const { name, email, contact, location, password, receiver_type } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user data into Superbase
    const { data, error } = await supabase
      .from(
        receiver_type === "regular user" || receiver_type === "orphanage"
          ? "food_receivers"
          : "food_donors"
      )
      .upsert([
        {
          contact,
          email,
          location,
          name,
          password: hashedPassword,
          receiver_type: receiver_type,
        },
      ]);

    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to sign up" });
    }

    // Send a success response
    res.status(201).json(data[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
