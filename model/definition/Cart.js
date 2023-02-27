const { Sequelize, Model, DataTypes } = require("sequelize");
let sequelize = require("../../common/databaseConnection");

class Cart extends Model {}

Cart.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allownull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    timeslaps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: "Cart",
  }
);

module.exports = Cart;
