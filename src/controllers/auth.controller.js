const { StatusCodes } = require("http-status-codes");

module.exports = {
   signup: async (req, res) => {
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

   login: async (req, res) => {
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
