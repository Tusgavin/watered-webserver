const { StatusCodes } = require("http-status-codes");
const { userService } = require("../services");
const { userValidation } = require("../validations");

module.exports = {
   getUser: async (req, res) => {
      try {

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

   updateUser: async (req, res) => {
      try {
         await userValidation.updateUserValidation(req.body);

         const updateUserResponse = await userService.updateUser(req.body, req.user);

         return res.status(StatusCodes.OK).json(updateUserResponse);
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

   autodeleteUser: async (req, res) => {
      try {

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
