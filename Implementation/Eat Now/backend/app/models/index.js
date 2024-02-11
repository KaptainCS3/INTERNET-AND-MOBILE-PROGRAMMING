const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  // operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.food_receivers = require("./FoodReceivers.model.js")(sequelize, Sequelize);
db.food_donors = require("./FoodDonors.model.js")(sequelize, Sequelize);
db.food_stocks = require("./FoodStock.model.js")(sequelize, Sequelize);
db.upload_stocks = require("./Upload.model.js")(sequelize, Sequelize);
module.exports = db;
