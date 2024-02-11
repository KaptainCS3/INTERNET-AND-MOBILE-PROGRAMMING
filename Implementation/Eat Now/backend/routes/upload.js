const express = require("express");
const multer = require("multer");
const { createClient } = require("@supabase/supabase-js");
const db = require("../app/models");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const UploadFood = db.upload_stocks;

// Create a Superbase client
const supabaseUrl = process.env.VITE_PROJECT_URL;
const supabaseKey = process.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, `${__dirname}/public/assets/upload`);
//   },
//   filename: (req, file, cb) => {
//     console.log(file);
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../client/public/assets/uploads");
  },
  filename: (req, file, callback) => {
    console.log(file);
    let arr = file.originalname.split(".");
    if (
      !fs.existsSync(
        path.join("../client/public/assets/uploads", file.originalname)
      )
    ) {
      return callback(null, file.originalname);
    } else {
      for (;;) {
        arr[0] = `${arr[0]}(1)`;
        if (
          fs.existsSync(
            path.join("../client/public/assets/uploads", `${arr[0]}.${arr[1]}`)
          )
        ) {
          continue;
        } else {
          return callback(null, `${arr[0]}.${arr[1]}`);
        }
      }
    }
  },
});

const uploadFile = multer({ storage: storage });

router.post("/upload", uploadFile.single("picture"), async (req, res) => {
  try {
    const { name, description, quantity, category_of_food } = req.body;

    // Upload the file to Superbase storage
    const { data, error } = await supabase.storage
      .from("stocks") // Replace with your Superbase storage bucket name
      .upload(
        `uploads/${req.file.filename}`,
        fs.createReadStream(req.file.path)
      );

    if (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "Failed to upload file to Superbase storage." });
    }

    // Save the file metadata to your database
    const upload = await UploadFood.create({
      name: name,
      category_of_food: category_of_food,
      quantity: quantity,
      description: description,
      picture: `uploads/${req.file.filename}`, // Use the path relative to your storage bucket
    });

    res.status(200).send({ message: "File uploaded successfully.", upload });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed to upload file." });
  }
});

module.exports = router;
