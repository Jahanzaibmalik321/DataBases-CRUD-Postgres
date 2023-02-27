const { models } = require("../model/definition");

module.exports = {
  createUser: async function (body) {
    const result = await models.User.create({ ...body });
    return result;
  },
  getUser: async function () {
    const result = await models.User.findAll({
      include: models.Roles,
    });
    return result;
  },
  getUserById: async function (ids) {
    const result = await models.User.findAll({
      where: { id: ids },
      include: models.Roles,
    });
    return result;
  },
  deleteUser: async function (ids) {
    const result = await models.User.destroy({
      where: { id: ids },
      include: models.Roles,
      // force: true,
    });
    return result + " User Deleted";
  },
  updateUser: async function (body) {
    const result = await models.User.update(
      {
        ...body,
      },
      {
        where: { id: body.id },
      }
    );
    return result;
  },
};
