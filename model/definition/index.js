const Sequelize = require("sequelize");

var config = require("../../config.json");
const db = {};

config = config.db;
let sequelize = require("../../common/databaseConnection");
const User = require("../definition/User");
const Cart = require("../definition/Cart");
const CartItems = require("../definition/CartItems");
const Orders = require("../definition/Orders");
const Products = require("../definition/Products");
const Roles = require("../definition/Roles");
const models = {
  User,
  Cart,
  Orders,
  Products,
  Roles,
  CartItems,
};

// Relations

// One-Many relation between Roles-User
Roles.hasMany(User, { onDelete: "CASCADE", foreignKey: "roleId" });
User.belongsTo(Roles, { onDelete: "CASCADE", foreignKey: "roleId" });

// One-One relation between Cart-User
User.hasOne(Cart, { onDelete: "CASCADE", foreignKey: "userId" });
Cart.belongsTo(User, { onDelete: "CASCADE", foreignKey: "userId" });

// Many-Many relation between Cart-CartItems-Products
Cart.hasMany(CartItems, { onDelete: "CASCADE", foreignKey: "cartId" });
CartItems.belongsTo(Cart, { onDelete: "CASCADE", foreignKey: "cartId" });

Products.hasMany(CartItems, { onDelete: "CASCADE", foreignKey: "productId" });
CartItems.belongsTo(Products, { onDelete: "CASCADE", foreignKey: "productId" });

sequelize.models = models;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = { db, models };
