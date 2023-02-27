const { models } = require("../model/definition");

module.exports = {
  getProducts: async function () {
    return models.Products.findAll();
  },
};
