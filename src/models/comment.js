const Plant = require("./plant");

module.exports = (sequelize, DataTypes) => {
   const Comment = sequelize.define(
      "Comment",
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
         comment: {
            type: DataTypes.STRING,
            allowNull: false
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
         tableName: "comments"
      }
   );

   return Comment;
};
