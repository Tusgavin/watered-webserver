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
      },
      {
         tableName: "comments"
      }
   );

   return Comment;
};
