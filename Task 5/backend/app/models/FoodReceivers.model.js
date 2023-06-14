module.exports = (sequelize, Sequelize) => {
  const FoodReceivers = sequelize.define("food_receivers", {
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
    receiver_type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    // createAt: new Date(),
    // updatedAt: new Date(),
  });

  return FoodReceivers;
};

