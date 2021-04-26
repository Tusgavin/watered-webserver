const { StatusCodes } = require("http-status-codes");
const { authService } = require("../services");
const { authValidation } = require("../validations");

module.exports = {
   signup: async (req, res) => {
      try {
         await authValidation.signupValidation(req.body);

         const signupResponse = await authService.signup(req.body);

         return res.status(StatusCodes.OK).json(signupResponse);         
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

   login: async (req, res) => {
      try {
         await authValidation.loginValidation(req.body);

         const loginResponse = await authService.login(req.body);

         return res.status(StatusCodes.OK).json(loginResponse);
         
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
