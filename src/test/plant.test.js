const chai = require('chai');
const chaiHttp = require('chai-http');
const { StatusCodes } = require('http-status-codes');

require('mocha-suppress-logs')();

const { expect } = chai;

chai.use(chaiHttp)

const app = require('../config/express');

process.env.NODE_ENV = "test";

describe('Plant',() => {

   describe('Create Plant', () => {
      
      it('', async () => {
         
      });
   });   
});