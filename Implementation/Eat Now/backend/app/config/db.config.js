module.exports = {
  HOST: process.env.VITE_HOST,
  USER: process.env.VITE_USER_DB,
  PASSWORD: process.env.VITE_DB_PASSWORD,
  DB: process.env.VITE_DB_NAME,
  dialect: "postgres", // Set the dialect to PostgreSQL
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false, // Set to false if you're facing SSL issues
    },
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
