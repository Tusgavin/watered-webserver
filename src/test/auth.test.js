const chai = require('chai');
const chaiHttp = require('chai-http');
const { StatusCodes } = require('http-status-codes');

require('mocha-suppress-logs')();

const { expect } = chai;

chai.use(chaiHttp)

const app = require('../config/express');
const db = require('../models');

process.env.NODE_ENV = "test";

describe('Auth',() => {

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
   
   describe('Log In', () => {

      it('Logs into a user if the body has the right fields', async () => {
         const testLogin = {
            "email": "teste1@teste1.com",
            "password": "12341234"
         };
         
         const response = await chai.request(app).post('/api/auth/login').send(testLogin);

         expect(response.status).to.equal(StatusCodes.OK);
      });

      it('Returns a Validation Error if the body does not have all the necessary fields', async () => {
         const testLogin = {
            "notEmail": "teste1@teste1.com",
            "password": "12341234"
         };

         const response = await chai.request(app).post('/api/auth/login').send(testLogin);

         expect(response.status).to.equal(StatusCodes.UNPROCESSABLE_ENTITY);
      });

      it('Return an Unauthorized Error if the password given is wrong', async () => {
         const testLogin = {
            "email": "teste1@teste1.com",
            "password": "1234123"
         };

         const response = await chai.request(app).post('/api/auth/login').send(testLogin);

         expect(response.status).to.equal(StatusCodes.UNAUTHORIZED);
      });

      it('Return a Not Found Error if the email passed is not registered as a user', async () => {
         const testLogin = {
            "email": "testeX@teste1.com",
            "password": "12341234"
         };

         const response = await chai.request(app).post('/api/auth/login').send(testLogin);

         expect(response.status).to.equal(StatusCodes.NOT_FOUND);
      });
   });   
});