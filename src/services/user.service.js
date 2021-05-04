const { StatusCodes } = require("http-status-codes");
const { messages, encryptor } = require("../helpers");
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

      const userToBeUpdated = await userRepository.getById(requestUserId);

      if (!userToBeUpdated) {
         throw {
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("user")
         };
      }

      const updatedResponse = await userRepository.updateInstance(userToBeUpdated, userDetails);

      return { updatedResponse };
   },

   autodeleteUser: async (confirmationBody, requesterDetails) => {
      const { password } = confirmationBody;
      const { id } = requesterDetails;

      const userToBeAutodeleted = await userRepository.getById(id);

      const validPassword = await encryptor.comparePasswords(password, userToBeAutodeleted.password);

      if (!validPassword) {
         throw {
            status: StatusCodes.UNAUTHORIZED,
            message: messages.invalidPassword()
         }
      }

      const deleteResponse = await userRepository.deleteInstanceById(id);

      return {
         message: "User deleted with success",
         deleteResponse
      };
   }
};
