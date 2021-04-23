const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { StatusCodes } = require("http-status-codes");
const messages = require("../helpers/messages");
const { constants } = require("../utils");
const userRepository = require("../repositories/user.repository");

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
      const requester = await userRepository.getById(decoded.id);

      if (!requester) {
         throw {
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("user")
         }
      }

      req.session = {
         token,
         id: decoded.id,
         email: decoded.email
      };

      req.user = requester;

      return next();
      
   } catch (error) {
      console.error(error);
      return res.status(error.status).json(error.message);
   }
};
