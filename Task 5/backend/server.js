const express = require("express");
const db = require("./app/models");
const cors = require("cors");
const signupRouter = require("./routes/signup");
const loginRouter = require("./routes/login");
const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["POST", "GET"],
  credential: true,
  exposedHeaders: ["Access-Control-Allow-Origin"],
};

const donors = db.food_donors;
const receivers = db.food_receivers;
app.use(cors(corsOptions));

// configure your server to include this header by adding the following middleware to your app:
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
//   next();
// });

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to EatNow application.",
  });
});

app.get("/api/receiver", (req, res) => {
  res.json({
    message: "Welcome to EatNow application receiver data: ",
    receivers,
  }); // return data as JSON
});

app.get("/api/donor", (req, res) => {
  res.json({
    message: "Welcome to EatNow application donor data: ",
    donors,
  }); // return data as JSON
});

//set API route to frontend
app.use(express.json());
app.use("/api", signupRouter);
app.use("/api", loginRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
