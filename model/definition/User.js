const { Sequelize, Model, DataTypes } = require("sequelize");
let sequelize = require("../../common/databaseConnection");

class User extends Model {}

User.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allownull: false,
      type: DataTypes.INTEGER,
    },
    firstName: {
      allownull: false,
      type: DataTypes.STRING(),
    },
    lastName: {
      allownull: false,
      type: DataTypes.STRING(),
    },
    userName: {
      Unique: true,
      allownull: false,
      type: DataTypes.STRING(),
    },
    email: {
      Unique: true,
      allownull: false,
      type: DataTypes.STRING(),
    },
    phoneNumber: {
      Unique: true,
      allownull: false,
      type: DataTypes.STRING(),
    },
    password: {
      allownull: false,
      type: DataTypes.STRING(),
    },
  },
  {
    timeslaps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: "User",
  }
);

module.exports = User;
