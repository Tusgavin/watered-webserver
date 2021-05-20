const chai = require('chai');
const chaiHttp = require('chai-http');
const { StatusCodes } = require('http-status-codes');

require('mocha-suppress-logs')();

const { expect } = chai;

chai.use(chaiHttp)

const app = require('../config/express');

process.env.NODE_ENV = "test";

describe('User',() => {

   describe('Get User', () => {
      it('Lists all users', async () => {

      });
   });

   describe('Update User', () => {
      it('Updates the user if the body has the right fields', async () => {

      });

      it('Returns a Validation Error if the body does not have all the necessary fields', async () => {

      });

      it('Returns a Not Found Error if the user does not exist', async () => {

      });
   });

   describe('Autoremove User', () => {
      it('Removes the user if the query has the right fields', async () => {

      });

      it('Returns a Validation Error if the query does not have all the necessary fields', async () => {

      });

      it('Returns an Unauthroized Error if the password passed is wrong', async () => {

      });
   });
});