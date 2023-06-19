const session = require("express-session");
const db = require("./app/models");
const MySQLStore = require("express-session")(session.Store);
const configureSession = () => {
  const sessionStore = new MySQLStore({ db: db.sequelize });

  // config middleware
  return session({
    store: sessionStore,
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  });
};


module.exports = configureSession;
