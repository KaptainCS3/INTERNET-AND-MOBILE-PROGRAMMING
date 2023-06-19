const express = require("express");
const db = require("../app/models");
const multer = require("multer");
const router = express.Router();
const path = require("path");
const UploadFood = db.upload_stocks;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../../Task 5/Eat_Now/public/assets/food_features");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const uploadFile = multer({ storage: storage });

router.post("/upload", uploadFile.single("image"), async (req, res) => {
  try {
    const { name, quantity, category_of_food, description, picture } = req.body;

    const upload = await UploadFood.create({
      name: name,
      quantity: quantity,
      category_of_food: category_of_food,
      description: description,
      picture: req.file.path,
      foodDonorId: 1,
      foodStockId: 2,
    });
    res.status(200).send({ message: "file uploaded successfully.", upload });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed to upload file.", upload });
  }
});

module.exports = router;
