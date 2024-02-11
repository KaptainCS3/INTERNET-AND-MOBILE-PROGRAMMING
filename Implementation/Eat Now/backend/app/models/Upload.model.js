module.exports = (sequelize, Sequelize) => {
  const UploadStock = sequelize.define(
    "upload_stocks",
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
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      picture: {
        type: Sequelize.BLOB("long"),
        allowNull: false,
      },
    },
    {
      timestamps: true, // Include createdAt and updatedAt
    }
  );

  // Uncomment the following lines if you want to add relationships
  // UploadStock.belongsTo(sequelize.models.food_donors, {
  //   foreignKey: "foodDonorId",
  // });
  // UploadStock.belongsTo(sequelize.models.food_stocks, {
  //   foreignKey: "foodStockId",
  // });

  return UploadStock;
};
