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
      try {
         await plantValidation.updatePlantValidation(req.body);

         const updatePlantResponse = await plantService.updatePlant(req.body, req.user);

         return res.status(StatusCodes.OK).json(updatePlantResponse);
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

   removePlant: async (req, res) => {
      try {
         await plantValidation.removePlantValidation(req.body);

         const removePlantResponse = await plantService.removePlant(req.body, req.user);

         return res.status(StatusCodes.OK).json(removePlantResponse);
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
   }
};
