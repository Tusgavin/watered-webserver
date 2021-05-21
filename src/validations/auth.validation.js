const yup = require("yup");

module.exports = {
   signupValidation: async (requestFields) => {
      const signupSchema = yup.object().shape({
         username: yup.string().required(),
         password: yup.string().required(),
         email: yup.string().required(),
      });

      await signupSchema.validate(requestFields, {
         stripUnknown: true
      });
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
