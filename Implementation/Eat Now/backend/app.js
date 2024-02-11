const express = require("express");
require("dotenv").config();
const db = require("./app/models");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const jwt = require("jsonwebtoken");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const cors = require("cors");
const signupRouter = require("./routes/signup");
const loginRouter = require("./routes/login");
const addStock = require("./routes/addStock");
const searchQuery = require("./routes/search");
const uploadStock = require("./routes/upload");
const allFood = require("./routes/foodData");
const allDonors = require("./routes/donorData");
const allReceivers = require("./routes/receiverData");
const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["POST", "GET"],
  credential: true,
  exposedHeaders: ["Access-Control-Allow-Origin"],
};

app.use(cors(corsOptions));

// Create a SequelizeStore instance with the db.sequelize object
const sessionStore = new SequelizeStore({ db: db.sequelize });

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

//! config middleware
app.use(
  session({
    store: sessionStore,
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

// Sync the session store with the database
sessionStore.sync();

const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    res.send("We need a token, please give it to us next time");
  } else {
    jwt.verify(token, "jwtSecret", (err, decoded) => {
      if (err) {
        console.log(err);
        console.log(
          res.json({ auth: false, message: "you are failed to authenticate" })
        );
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
};

app.get("/Auth", verifyJWT, (req, res) => {
  res.send("You are authenticated Congrats:");
});

app.get("/login", verifyJWT, (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

//set API endpoint route to frontend
app.use(express.json());

//! middleware signup
app.use("/api", signupRouter);

//! middleware login

app.use("/api", loginRouter);

//! middleware addStock
app.use("/api", addStock);

//! middleware search product
app.use("/api", searchQuery);

//! middleware upload product
app.use("/api", uploadStock);

//! middleware return Food_Donor object
app.use("/api", allDonors);

//! middleware return Food_Receiver object
app.use("/api", allReceivers);

//! middleware return all Food object
app.use("/api", allFood);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
