const yup = require("yup");
const { messages } = require("../helpers");

module.exports = {
   updateUserValidation: async (requestFields) => {
      const updateFields = [
         'email',
         'username',
         'password',
      ];

      const updateUserSchema = yup.object().shape({
         email: yup.string(),
         username: yup.string(),
      }).test('at-least-one-field', messages.atLeastOneFieldRequired(updateFields), value => {
         return !!(
            value.email
            || value.username
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
