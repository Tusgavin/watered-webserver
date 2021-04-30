const { auth } = require("./auth.routes");
const { plant } = require("./plant.routes");
const { user } = require("./user.routes");

module.exports = {
   auth,
   plant,
   user
};
