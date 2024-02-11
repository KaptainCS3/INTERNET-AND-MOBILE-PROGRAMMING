const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const router = express.Router();

// Configure your Supabase client
const supabaseUrl = process.env.VITE_PROJECT_URL;
const supabaseKey = process.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

router.get("/allStocks", async (req, res, next) => {
  try {
    // Fetch data from the "food_stocks" table
    const { data, error } = await supabase.from("food_stocks").select();

    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to retrieve products" });
    }

    res.json({ products: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve products" });
  }
});

module.exports = router;
