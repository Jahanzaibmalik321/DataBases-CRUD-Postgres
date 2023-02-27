const { Sequelize, Model, DataTypes } = require("sequelize");
let sequelize = require("../../common/databaseConnection");

class Products extends Model {}

Products.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    productTitle: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    price: {
      allowNull: false,
      type: DataTypes.DOUBLE,
    },
    productDetail: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    category:{
        allowNull: false,
        type: DataTypes.STRING(),
    },
    brand: {
        allowNull: false,
        type: DataTypes.STRING(),
      },  
  },
  {
    timeslaps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: "Products",
  }
);

module.exports = Products;
