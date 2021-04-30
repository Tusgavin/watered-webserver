const yup = require("yup");
const { messages } = require("../helpers");

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
      });
   },

   updatePlantValidation: async (requestFields) => {
      const updateFields = [
         'name',
         'species',
         'waterCycle',
         'timesPerCycle'
      ];

      const updatePlantSchema = yup.object().shape({
         id: yup.number().required(),
         name: yup.string(),
         species: yup.string(),
         waterCycle: yup.string().oneOf(['DAILY', 'WEEKLY', 'MONTHLY']),
         timesPerCycle: yup.number().positive().integer()
      }).test('at-least-one-field', messages.atLeastOneFieldRequired(updateFields), value => {
         return !!(
            value.name 
            || value.species 
            || value.timesPerCycle 
            || value.waterCycle
            );
      });

      await updatePlantSchema.validate(requestFields, {
         stripUnknown: true
      });
   },

   removePlantValidation: async (requestFields) => {
      const removePlantSchema = yup.object().shape({
         id: yup.number().required()
      });

      await removePlantSchema.validate(requestFields, {
         stripUnknown: true
      });
   }
};
