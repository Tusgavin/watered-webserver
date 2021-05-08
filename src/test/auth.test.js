const chai = require('chai');
const chaiHttp = require('chai-http');
const { StatusCodes } = require('http-status-codes');

const { expect, should } = chai;

chai.use(chaiHttp)

const app = require('../config/express');
const { authController } = require('../controllers');
const { userRepository } = require('../repositories');

process.env.NODE_ENV = "test";

describe('Auth',() => {

   describe('Log In',() => {

      before(async () => {;

      });

      it('Logs into a user if the body has the right fields', async () => {

      });

      it('Returns a Validation Error if the body does not have all the necessary fields', async () => {

      });

      it('Return an Unauthorized Error if the password given is wrong', async () => {

      });

      it('Return a Not Found Error if the email passed is not registered as a user', async () => {

      });
   });

   describe('Sign Up', () => {
      it('Creates a user if the body has the right fields', () => {

      });

      it('Returns a Validation Error if the body does not have all the necessary fields', () => {

      });

      it('Returns a Conflict Error if the username is already registered', () => {

      });

      it('Returns a Conflict Error if the email is already registered', () => {

      });
   });
   
});