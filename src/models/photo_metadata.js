const Plant = require("./plant");

module.exports = (sequelize, DataTypes) => {
   const PhotoMetadata = sequelize.define(
      "PhotoMetadata",
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
         photoName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "photo_name"
         },
         bucketName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "bucket_name"
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
         tableName: "photos_metadata"
      }
   );

   return PhotoMetadata;
};
