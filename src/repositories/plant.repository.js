const { Plant } = require("../models");

module.exports = {
   getById: (id) => Plant.findByPk(id),
   getOneByField: (params) => Plant.findOne({ where: params }),
   getAllByField: (params) => Plant.findAndCountAll({ where: params }),
   createNewInstance: (params) => Plant.create(params),
   updateInstance: (plant, plantDetails) => plant.update(plantDetails),
   deleteInstance: (id) => Plant.destroy({ where: { id } })
};
