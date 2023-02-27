const { Sequelize, Model, DataTypes } = require("sequelize");
let sequelize = require("../../common/databaseConnection");

class Roles extends Model {}

Roles.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allownull: false,
      type: DataTypes.INTEGER,
    },
    role: {
      allownull: false,
      unique: true,
      type: DataTypes.STRING(40),
    },
  },
  {
    timeslaps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: "Roles",
  }
);

module.exports = Roles;
