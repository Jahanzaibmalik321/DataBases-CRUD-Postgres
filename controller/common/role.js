const userService = require("../../service/commonService");
module.exports = async function (req, res) {
  const data = await userService.createRole(req.body);
  res.send(data);
};