const chai = require('chai');
const chaiHttp = require('chai-http');
const { StatusCodes } = require('http-status-codes');

require('mocha-suppress-logs')();

const { expect } = chai;

const { userRepository } = require('../repositories');

chai.use(chaiHttp)

const app = require('../config/express');

process.env.NODE_ENV = "test";

describe('Auth',() => {

   describe('Sign Up', () => {

      before(async () => {
         await userRepository.createNewInstance({
            "username": "teste1",
            "email": "teste1@teste1.com",
            "password": "12341234",
         });
      });

      after(async () => {
         await userRepository.deleteInstanceByEmail('teste1@teste1.com');
      });

      it('Creates a user if the body has the right fields', async () => {
         const testSignup = {
            "username": "userTestSignup",
            "password": "12341234",
            "email": "sgnup@sgnup.com",
         };

         const response = await chai.request(app).post('/api/auth/signup').send(testSignup);

         expect(response.status).to.equal(StatusCodes.OK);

         await userRepository.deleteInstanceByEmail('sgnup@sgnup.com');
      });

      it('Returns a Validation Error if the body does not have all the necessary fields', async () => {
         const testSignup = {
            "usrname": "testeX",
            "email": "testeX@testeX.com",
            "password": "12341234",
         };

         const response = await chai.request(app).post('/api/auth/signup').send(testSignup);

         expect(response.status).to.equal(StatusCodes.UNPROCESSABLE_ENTITY);
      });

      it('Returns a Conflict Error if the username is already registered', async () => {
         const testSignup = {
            "username": "teste1",
            "email": "testeY@testeY.com",
            "password": "12341234",
         };

         const response = await chai.request(app).post('/api/auth/signup').send(testSignup);

         expect(response.status).to.equal(StatusCodes.CONFLICT);
      });

      it('Returns a Conflict Error if the email is already registered', async () => {
         const testSignup = {
            "username": "testeZ",
            "email": "teste1@teste1.com",
            "password": "12341234",
         };

         const response = await chai.request(app).post('/api/auth/signup').send(testSignup);

         expect(response.status).to.equal(StatusCodes.CONFLICT);
      });
   });
   
   describe('Log In', () => {

      before(async () => {
         await userRepository.createNewInstance({
            "username": "teste1",
            "email": "teste1@teste1.com",
            "password": "12341234",
         });
      });

      after(async () => {
         await userRepository.deleteInstanceByEmail('teste1@teste1.com');
      });

      it('Logs into a user if the body has the right fields', async () => {
         const testLogin = {
            "email": "teste1@teste1.com",
            "password": "12341234"
         };
         
         const response = await chai.request(app).post('/api/auth/login').send(testLogin);

         console.log(response.body);
         console.log('TESTEEE');

         expect(response.status).to.equal(StatusCodes.OK);
         expect(response.body).to.have.property('email');
         expect(response.body.email).to.not.equal(null);
         expect(response.body).to.have.property('token');
         expect(response.body.token).to.not.equal(null);
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
