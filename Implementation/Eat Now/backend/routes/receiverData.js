const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const router = express.Router();

// Configure your Supabase client
const supabaseUrl = process.env.VITE_PROJECT_URL;
const supabaseKey = process.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

router.get("/receivers", async (req, res, next) => {
  try {
    // Retrieve data from the "food_receivers" table in Superbase
    const { data: products, error } = await supabase
      .from("food_receivers")
      .select("*");

    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to retrieve products" });
    }

    // Send the retrieved data in the response
    res.json({ products });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve products" });
  }
});

module.exports = router;
