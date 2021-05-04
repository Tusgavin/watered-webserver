const yup = require("yup");
const { messages } = require("../helpers");

module.exports = {
   updateUserValidation: async (requestFields) => {
      const updateFields = [
         'email',
         'firstName',
         'lastName',
         'username',
         'password',
         'birthdate'
      ];

      const updateUserSchema = yup.object().shape({
         email: yup.string(),
         firstName: yup.string(),
         lastName: yup.string(),
         username: yup.string(),
         birthdate: yup.string()
      }).test('at-least-one-field', messages.atLeastOneFieldRequired(updateFields), value => {
         return !!(
            value.email
            || value.firstName
            || value.lastName
            || value.username
            || value.birthdate
            );
      });

      await updateUserSchema.validate(requestFields, {
         stripUnknown: true
      });
   },

   autodeleteUserValidation: async (requestFields) => {
      const autodeleteUserSchema = yup.object().shape({
         password: yup.string().required()
      });

      await autodeleteUserSchema.validate(requestFields, {
         stripUnknown: true
      });
   }
};
