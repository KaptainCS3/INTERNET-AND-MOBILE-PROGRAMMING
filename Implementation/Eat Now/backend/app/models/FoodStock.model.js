module.exports = (sequelize, Sequelize) => {
  const FoodStock = sequelize.define("food_stocks", {
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
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    category_of_food: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    expiry_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    foodDonorId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: sequelize.models.food_donors,
        key: "id",
      },
    },
  });
  FoodStock.belongsTo(sequelize.models.food_donors, {
    foreignKey: "foodDonorId",
  });
  return FoodStock;
};
