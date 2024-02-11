const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const router = express.Router();

// Configure your Supabase client
const supabaseUrl = process.env.VITE_PROJECT_URL;
const supabaseKey = process.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

router.post("/addstocks", async (req, res) => {
  const { name, quantity, category_of_food, expiry_date, foodDonorId } =
    req.body;
  try {
    // Create a record in the "food_stocks" table on Supabase
    const { data: food_stock, error } = await supabase
      .from("food_stocks")
      .upsert([
        {
          category_of_food: category_of_food,
          expiry_date: expiry_date,
          name: name,
          quantity: quantity,
          foodDonorId: foodDonorId,
        },
      ]);

    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error." });
    }

    res.status(201).json(food_stock);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
