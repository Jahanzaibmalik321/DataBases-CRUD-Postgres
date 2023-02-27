const { Sequelize, Model, DataTypes } = require("sequelize");
let sequelize = require("../../common/databaseConnection");

class Orders extends Model {}

Orders.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allownull: false,
      type: DataTypes.INTEGER,
    },
    orderDetail: {
      allownull: false,
      type: DataTypes.STRING(),
    },
    orderDate: {
      allownull: false,
      type: DataTypes.DATE,
    },
    orderQuantity: {
      allownull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    timeslaps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: "Orders",
  }
);

module.exports = Orders;
