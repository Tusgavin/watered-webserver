const { StatusCodes } = require("http-status-codes");
const { messages } = require("../helpers");
const { plantRepository } = require("../repositories");

module.exports = {
   createPlant: async (plantDetails, requesterDetails) => {
      const {
         name,
         species,
         waterCycle,
         timesPerCycle
      } = plantDetails;

      const { id } = requesterDetails;

      const plantWithName = await plantRepository.getOneByField({ name, userId: id });

      if (plantWithName) {
         throw {
            status: StatusCodes.CONFLICT,
            message: messages.alreadyExists("plant", "name")
         };
      }

      const newPlant = await plantRepository.createNewInstance({
         name,
         species,
         waterCycle,
         timesPerCycle,
         userId: id
      });

      return { newPlant };
   }
};
