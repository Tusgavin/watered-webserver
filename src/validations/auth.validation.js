const yup = require("yup");

module.exports = {
   signupValidation: async (requestFields) => {

   },
   
   loginValidation: async (requestFields) => {
      const loginSchema = yup.object().shape({
         email: yup.string().required().email(),
         password: yup.string().required()
      });

      await loginSchema.validate(requestFields, {
         stripUnknown: true
      });
   }
};
