const User = require("./user");

module.exports = (sequelize, DataTypes) => {
   const Plant = sequelize.define(
      "Plant",
      {
         userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "user_id",
            references: {
               model: User,
               key: "id"
            }
         },
         name: {
            type: DataTypes.STRING,
            allowNull: false
         },
         species: {
            type: DataTypes.STRING
         },
         waterCycle: {
            type: DataTypes.ENUM,
            values:['DAILY', 'WEEKLY', 'MONTHLY'],
            field: "water_cycle"
         },
         timesPerCycle: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "times_per_cycle"
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
         tableName: "plants"
      }
   );

   return Plant;
};
