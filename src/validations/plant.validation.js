const yup = require("yup");

module.exports = {
   createPlantValidation: async (requestFields) => {
      const createPlantSchema = yup.object().shape({
         name: yup.string().required(),
         species: yup.string(),
         waterCycle: yup.string().oneOf(['DAILY', 'WEEKLY', 'MONTHLY']),
         timesPerCycle: yup.number().positive().integer()
      });

      await createPlantSchema.validate(requestFields, {
         stripUnknown: true
      })
   },
};
