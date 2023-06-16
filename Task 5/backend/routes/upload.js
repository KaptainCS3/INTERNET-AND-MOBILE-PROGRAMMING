// const express = require("express");
// const db = require("../app/models");
// const multer = require("multer");
// const UploadFood = db.upload_stocks;
// const router = express.Router();
// const storage = multer.diskStorage({
//   destination: (req, file, callBack) => {
//     callBack(null, "./public/images/"); // './public/images/' directory name where save the file
//   },
//   filename: (req, file, callBack) => {
//     callBack(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// const upload = multer({
//   storage: storage,
// });
// router.post("/upload", async (req, res) => {
//   try {
//     const { name, quantity, category_of_food, description, picture } = req.body;
//     const pic = picture;
//     const upload =
//     await UploadFood.create({
//       name: name,
//       quantity: quantity,
//       category_of_food: category_of_food,
//       description: description,
//       picture: pic.data,
//     });
//     res.status(200).send({ message: "file uploaded successfully.", upload });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: "Failed to upload file." });
//   }
// });

// module.exports = router;

const express = require("express");
const db = require("../app/models");
const multer = require("multer");
const router = express.Router();
const path = require("path");

const UploadFood = db.upload_stocks;

const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./public/images/"); // './public/images/' directory name where save the file
  },
  filename: (req, file, callBack) => {
    callBack(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const { name, quantity, category_of_food, description } = req.body;
    const picture = req.file;
    const pic = picture
      ? "http://localhost:8080/images/" + picture.filename
      : null;
    const upload = await UploadFood.create({
      name: name,
      quantity: quantity,
      category_of_food: category_of_food,
      description: description,
      picture: pic,
      foodDonorId: 1,
      foodStockId: 2,
    });
    res.status(200).send({ message: "file uploaded successfully.", upload });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed to upload file." });
  }
});

module.exports = router;
