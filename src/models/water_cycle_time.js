const Plant = require("./plant");

module.exports = (sequelize, DataTypes) => {
   const WaterCycleTime = sequelize.define(
      "WaterCycleTime",
      {
         plantId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "plant_id",
            references: {
               model: Plant,
               key: "id"
            }
         },
         hour: {
            type: DataTypes.TIME,
            allowNull: false,
         },
         createdAt: {
            type: DataTypes.DATE,
            field: "created_at",
            allowNull: false
         },
         updatedAt: {
            type: DataTypes.DATE,
            field: "updated_at",
            allowNull: false
         }
      },
      {
         tableName: "water_cycle_time"
      }
   );

   return WaterCycleTime;
};
