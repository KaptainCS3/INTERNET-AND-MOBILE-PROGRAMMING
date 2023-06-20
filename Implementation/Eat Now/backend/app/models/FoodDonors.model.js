
module.exports = (sequelize, Sequelize) => {
  const FoodDonors = sequelize.define("food_donors",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    location: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    contact: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    donor_type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    // createdAt: new Date(),
    // updatedAt: new Date(),
  });
  return FoodDonors;
};
