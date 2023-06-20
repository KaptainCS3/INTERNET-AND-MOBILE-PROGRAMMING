module.exports = (sequelize, Sequelize) => {
  const UploadStock = sequelize.define("upload_stocks", {
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
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    picture: {
      type: Sequelize.BLOB("long"),
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
    foodStockId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: sequelize.models.food_stocks,
        key: "id",
      },
    },
  });
  UploadStock.belongsTo(sequelize.models.food_donors, {
    foreignKey: "foodDonorId",
  });
  UploadStock.belongsTo(sequelize.models.food_stocks, {
    foreignKey: "foodStockId",
  });

  return UploadStock;
};
