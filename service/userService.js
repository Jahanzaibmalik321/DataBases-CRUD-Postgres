const bcrypt = require("bcrypt");
const userModel = require("../model/userModel");

module.exports = {
  createUser: async function (body) {
    body.password=await bcrypt.hashSync(body.password,10);
    // const match = await bcrypt.compare(password, hash);

    const data = await userModel.createUser(body);
    return data;
  },
  getUser: async function () {
    const data=await userModel.getUser();
    return data;
  },
  getUserById: async function (ids) {
    const data=await userModel.getUserById(ids);
    return data;
  },
  deleteUser: async function (query) {
    const data=await userModel.deleteUser(query.ids);
    return data;
  },
  updateUser: async function (body) {
    const data=await userModel.updateUser(body);
    return data;
  },
};
