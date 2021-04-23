const bcrypt = require("bcryptjs");

module.exports.encryptor = {
   hashPassword: (password) => bcrypt.hash(password, 8),
   comparePasswords: (passwordGiven, passwordSaved) => bcrypt.compare(passwordGiven, passwordSaved)
};
