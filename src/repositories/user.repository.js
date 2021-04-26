const { User } = require("../models");

module.exports = {
   getById: (id) => User.findByPk(id),
   getOneByField: (params) => User.findOne({ where: params }),
   createNewInstance: (params) => User.create(params)
};
