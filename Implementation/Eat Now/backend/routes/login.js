const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createClient } = require("@supabase/supabase-js");
const router = express.Router();

// Configure your Supabase client
const supabaseUrl = process.env.VITE_PROJECT_URL;
const supabaseKey = process.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Try to find the user by email in the FoodReceivers table
  const { data: receiver, error: receiverError } = await supabase
    .from("food_receivers")
    .select("*")
    .eq("email", email)
    .single();

  // If not found, try to find the user by email in the FoodDonors table
  const { data: donor, error: donorError } = await supabase
    .from("food_donors")
    .select("*")
    .eq("email", email)
    .single();

  // If neither found, return an error response
  if (
    (receiverError && receiverError.message !== "No row found") ||
    (donorError && donorError.message !== "No row found")
  ) {
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
  res.json({
    auth: true,
    token: token,
    message: "Authentication successful",
    user,
  });
});

module.exports = router;
