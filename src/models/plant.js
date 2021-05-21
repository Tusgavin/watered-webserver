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
         daysBetweenWater: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "days_between_water"
         },
         lastTimeWater: {
            type: DataTypes.DATE,
            allowNull: false,
            field: "last_time_water"
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
