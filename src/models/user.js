const { encryptor } = require("../helpers");

module.exports = (sequelize, DataTypes) => {
   const User = sequelize.define(
      "User",
      {
         username: {
            type: DataTypes.STRING,
            allowNull: false
         },
         password: {
            type: DataTypes.STRING,
            allowNull: false
         },
         email: {
            type: DataTypes.STRING,
            allowNull: false
         },
         password: {
            type: DataTypes.STRING,
            allowNull: false
         },
         isAdmin: {
            type: DataTypes.BOOLEAN,
            field: "is_admin",
            defaultValue: false
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
         tableName: "users"
      }
   );

   // Hash password before saving it
   User.beforeSave(async (user, options) => {
      const password = await encryptor.hashPassword(user.password);
      if (user.changed("password")) {
         Object.assign(user, { password });
      }
      return user;
   });

   // Does not return password field when getting a user from db
   User.prototype.toJSON = function () {
      const user = { ...this.get() };
      return Object.fromEntries(
         Object.entries(user).filter(([key]) => !["password"].includes(key))
      );
   };

   return User;
};
