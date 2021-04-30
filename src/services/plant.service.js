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
   },

   updatePlant: async (plantDetails, requesterDetails) => {
      const userId = requesterDetails.id;
      const plantId = plantDetails.id;

      const plantToBeUpdated = await plantRepository.getById(plantId);
      
      if (!plantToBeUpdated) {
         throw {
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("plant")
         };
      }

      if (!plantToBeUpdated.userId === userId) {
         throw {
            status: StatusCodes.UNAUTHORIZED,
            message: messages.notPermitted()
         };
      }

      const updatedResponse = await plantRepository.updateInstance(plantToBeUpdated, plantDetails);

      return { updatedResponse };
   },

   listPlant: async (listDetails, requesterDetails) => {
      let query = listDetails;

      query.userId = requesterDetails.id;

      const { count, rows } = await plantRepository.getAllByField(query);

      return {
         metadata: {
            total: count
         },
         data: rows
      }
   },

   removePlant: async (plantDetails, requesterDetails) => {
      const userId = requesterDetails.id;
      const plantId = plantDetails.id;

      const plantWithId = await plantRepository.getById(plantId);

      if (!plantWithId) {
         throw {
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("plant")
         }
      }

      if (plantWithId.userId !== userId) {
         throw {
            status: StatusCodes.UNAUTHORIZED,
            message: messages.notPermitted()
         };
      }

      const deleteResponse = await plantRepository.deleteInstance(plantId);

      return {
         message: "Plant deleted with success",
         deleted: deleteResponse
      };
   }
};
