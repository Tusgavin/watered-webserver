const { StatusCodes } = require("http-status-codes");
const { plantService } = require("../services");
const { plantValidation } = require("../validations");

module.exports = {
   createPlant: async (req, res) => {
      try {
         await plantValidation.createPlantValidation(req.body);

         const createPlantResponse = await plantService.createPlant(req.body, req.user);

         return res.status(StatusCodes.OK).json(createPlantResponse);
      } catch (error) {
         console.error(error);
         return res
            .status(
               error.name === "ValidationError"
               ? StatusCodes.UNPROCESSABLE_ENTITY
               : error.status || StatusCodes.INTERNAL_SERVER_ERROR
            )
            .json(error.message);
      }
   },

   updatePlant: async (req, res) => {

   },

   removePlant: async (req, res) => {

   }
};
