const { models } = require("../model/definition");

module.exports = {
  createRole: async function (body) {
    const result = await models.Roles.create({...body});
    return result;
  },
};
