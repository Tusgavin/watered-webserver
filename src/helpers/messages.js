module.exports.messages = {
   notFound: (element) => `${element} not found`,
   invalidAuthorization: () => "Authorization Header is not correct",
   invalidPassword: () => "Invalid Password",
   alreadyExists: (instance, column) => `${instance} with ${column} already exists`,
   atLeastOneFieldRequired: (fieldsArr) => `At least one of the fields ${fieldsArr} must be present`,
   notPermitted: () => "User do not own the permission"
};
