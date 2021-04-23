const { User } = require("../models");

module.exports = {
   getById: (id) => User.findByPk(id)
};
