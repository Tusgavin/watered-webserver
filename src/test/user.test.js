const chai = require('chai');
const chaiHttp = require('chai-http');
const { StatusCodes } = require('http-status-codes');

require('mocha-suppress-logs')();

const { expect } = chai;

chai.use(chaiHttp)

const app = require('../config/express');

process.env.NODE_ENV = "test";

describe('User',() => {

   describe('Multiple tests', () => {
      it('Tests if the script is working fine', async () => {
         expect(true).to.equal(true);
      });
   });   
});