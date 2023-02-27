const bcrypt = require("bcrypt");
const productModel = require("../model/productModel");

module.exports = {
  productInfo: async function () {
    // const match = await bcrypt.compare(password, hash);

    const data = await productModel.getProducts();
    return data;
  },
};
