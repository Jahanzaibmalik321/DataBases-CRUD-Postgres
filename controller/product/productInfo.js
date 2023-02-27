const userService = require("../../service/productService");
module.exports = async function (req, res) {
  const data = await productService.productInfo(/*req.query.password,req.query.hash*/);
  res.send(data);
};
