const { StatusCodes } = require("http-status-codes");
const { messages } = require("../helpers");
const { userRepository } = require("../repositories");

module.exports = {
   getUser: async (requesterDetails) => {
      const requesterUserId = requesterDetails.id;

      const user = await userRepository.getById(requesterUserId);

      if (!user) {
         throw {
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("user")
         };
      }

      return { user };      
   },

   updateUser: async (userDetails, requesterDetails) => {
      const requestUserId = requesterDetails.id;
      const userToBeUpdatedId = userDetails.id;

      if (requestUserId !== userToBeUpdatedId) {
         throw {
            status: StatusCodes.UNAUTHORIZED,
            message: messages.notPermitted()
         };
      }

      const userToBeUpdated = await userRepository.getById(userToBeUpdatedId);

      if (!userToBeUpdated) {
         throw {
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("user")
         };
      }

      const updatedResponse = await userRepository.updateInstance(userToBeUpdated, userDetails);

      return { updatedResponse };
   }
};
