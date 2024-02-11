module.exports = (sequelize, Sequelize) => {
  const FoodStock = sequelize.define(
    "food_stocks",
    {
      id: {
        allowNull: false,
        defaultValue: Sequelize.fn("uuid_generate_v4"),
        primaryKey: true,
        type: Sequelize.UUID,
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
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: sequelize.models.food_donors,
          key: "id",
          onDelete: "CASCADE", // Specify the behavior on deletion
          onUpdate: "CASCADE", // Specify the behavior on update
        },
      },
    },
    {
      timestamps: true, // Include createdAt and updatedAt
    }
  );

  FoodStock.belongsTo(sequelize.models.food_donors, {
    foreignKey: "foodDonorId",
  });

  return FoodStock;
};
