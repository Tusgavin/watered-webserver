const { Plant } = require("../models");

module.exports = {
   getById: (id) => Plant.findByPk(id),
   getOneByField: (params) => Plant.findOne({ where: params }),
   createNewInstance: (params) => Plant.create(params),
   updateInstance: (plant, plantDetails) => plant.update(plantDetails)
};
