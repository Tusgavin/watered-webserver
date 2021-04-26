module.exports.messages = {
   notFound: (element) => `${element} not found`,
   invalidAuthorization: () => "Authorization Header is not correct",
   invalidPassword: () => "Invalid Password",
   alreadyExists: (instance, column) => `${instance} with ${column} already exists`
};
