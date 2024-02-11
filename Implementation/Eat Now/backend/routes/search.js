const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const router = express.Router();

// Configure your Supabase client
const supabaseUrl = process.env.VITE_PROJECT_URL;
const supabaseKey = process.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

router.post("/search", async (req, res) => {
  const { name } = req.body;

  try {
    // Query the "food_stocks" table in Superbase for the given name
    const { data, error } = await supabase
      .from("food_stocks")
      .select("*")
      .eq("name", name);

    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to search for products" });
    }

    // Check if any matching products were found
    if (data && data.length > 0) {
      return res.status(200).json({
        message: "Congratulations! Product Found!",
        isFound: true,
        product: data[0], // Assuming you want to send the first matching product
      });
    } else {
      return res.status(404).json({ message: "Product not Found!!!" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
