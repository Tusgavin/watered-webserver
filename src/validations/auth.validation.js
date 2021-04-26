const yup = require("yup");

module.exports = {
   signupValidation: async (requestFields) => {
      const signupSchema = yup.object().shape({
         username: yup.string().required(),
         firstName: yup.string().required(),
         lastName: yup.string(),
         password: yup.string().required(),
         email: yup.string().required(),
         birthdate: yup.date().required(),
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
