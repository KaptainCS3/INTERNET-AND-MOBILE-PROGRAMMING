module.exports = {
  HOST: "localhost",
  USER: "Admin_food_waste",
  PASSWORD: "@237foodwaste",
  DB: "food_waste_database",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
