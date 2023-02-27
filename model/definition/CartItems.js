const { Sequelize, Model, DataTypes } = require("sequelize");
let sequelize = require("../../common/databaseConnection");

class CartItems extends Model {}

CartItems.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allownull: false,
      type: DataTypes.INTEGER,
    },
    quantity: {
      allownull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    timeslaps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: "CartItems",
  }
);

module.exports = CartItems;
