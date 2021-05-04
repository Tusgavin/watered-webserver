const { StatusCodes } = require("http-status-codes");
const { userService } = require("../services");
const { userValidation } = require("../validations");

module.exports = {
   getUser: async (req, res) => {
      try {
         const getUserResponse = await userService.getUser(req.user);

         return res.status(StatusCodes.OK).json(getUserResponse);
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
         await userValidation.autodeleteUserValidation(req.body);

         const autodeleteUserResponse = await userService.autodeleteUser(req.body, req.user);

         return res.status(StatusCodes.OK).json(autodeleteUserResponse);
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
