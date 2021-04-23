const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { StatusCodes } = require("http-status-codes");
const messages = require("../helpers/messages");
const { constants } = require("../utils");

module.exports = async (req, res, next) => {
   try {
      let token;

      if (req.headers && req.headers.authorization) {
         const [schema, credentials] = req.header.authorization.split(" ");

         if (schema.match(/^Bearer$/i)) {
            token = credentials;
         } else {
            throw {
               status: StatusCodes.UNAUTHORIZED,
               message: messages.invalidAuthorization
            };
         }
      } else {
         throw {
            status: StatusCodes.UNAUTHORIZED,
            message: messages.invalidAuthorization
         }
      }

      const promisedJwtVerification = promisify(jwt.verify);
      const decoded = await promisedJwtVerification(token, constants.jwtToken);


   } catch (error) {
      console.error(error);
      return res.status(error.status).json(error.message);
   }
};
