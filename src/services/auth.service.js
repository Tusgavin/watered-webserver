const { constants } = require("../utils");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { messages, encryptor } = require("../helpers");
const { userRepository } = require("../repositories");

module.exports = {
   signup: async (userDetails) => {
      const {
         username,
         firstName,
         lastName,
         email,
         password,
         birthdate
      } = userDetails;

      const userWithEmail = await userRepository.getOneByField({ email });
      if (userWithEmail) {
         throw {
            status: StatusCodes.CONFLICT,
            message: messages.alreadyExists(user, email)
         }
      }

      const userWithUsername = await userRepository.getOneByField({ username });
      if (userWithUsername) {
         throw {
            status: StatusCodes.CONFLICT,
            message: messages.alreadyExists(user, username)
         }
      }

      const newUser = await userRepository.createNewInstance({
         username,
         firstName,
         lastName,
         email,
         password,
         birthdate
      });

      return { newUser };     
   },

   login: async (userDetails) => {
      const { email, password } = userDetails;

      const user = await userRepository.getOneByField({ email });

      if (!user) {
         throw {
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("email")
         }
      }

      const validPassword = await encryptor.comparePasswords(password, user.password);

      if (!validPassword) {
         throw {
            status: StatusCodes.UNAUTHORIZED,
            message: messages.invalidPassword
         }
      }

      const payload = {
         id: user.id,
         email: user.email
      };

      const sign = promisify(jwt.sign);
      const token = await sign(payload, constants.jwtToken);

      return {
         email,
         token
      };
   },
};
