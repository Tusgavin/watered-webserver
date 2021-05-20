const chai = require('chai');
const chaiHttp = require('chai-http');
const { StatusCodes } = require('http-status-codes');

require('mocha-suppress-logs')();

const { expect } = chai;

const { plantRepository } = require('../repositories');

chai.use(chaiHttp)

const app = require('../config/express');

process.env.NODE_ENV = "test";

describe('Plant',() => {

   describe('Create Plant', () => {

      before(async () => {

      });

      after(async () => {
         
      });
      
      it('Creates a plant if the body has the right fields', async () => {
         
      });

      it('Returns a Validation Error if the body does not have all the necessary fields', async () => {

      });

      it('Returns a Conflict Error if the user has two plant with the same name', async () => {

      });
   });

   describe('List Plant', () => {
      it('Lists all plants the user has', async () => {

      });
   });

   describe('Update Plant', () => {
      it('Updates the plant if the body has the right fields', async () => {

      });

      it('Returns a Validation Error if the body does not have all the necessary fields', async () => {

      });

      it('Returns an Unauthroized Error if the plant does not belong to the user', async () => {

      });

      it('Returns a Not Found Error if the plant does not exist', async () => {

      });
   });

   describe('Remove Plant', () => {
      it('Removes the plant if the query has the right fields', async () => {

      });

      it('Returns a Validation Error if the query does not have all the necessary fields', async () => {

      });

      it('Returns an Unauthroized Error if the plant does not belong to the user', async () => {

      });

      it('Returns a Not Found Error if the plant does not exist', async () => {

      });
   });
});