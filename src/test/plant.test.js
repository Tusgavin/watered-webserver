const chai = require('chai');
const chaiHttp = require('chai-http');
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require('http-status-codes');

require('mocha-suppress-logs')();

const { expect } = chai;

const { plantRepository, userRepository } = require('../repositories');
const { constants } = require('../utils');

chai.use(chaiHttp)

const app = require('../config/express');

process.env.NODE_ENV = "test";

describe('Plant',() => {

   describe('Create Plant', () => {

      let plantTesterUser;
      let plantTesterPlant;

      let token;

      before(async () => {
         plantTesterUser = await userRepository.createNewInstance({
            "username": "plantTesterUser",
            "email": "plantTester@user.com",
            "password": "12341234",
         });

         const payload = {
            id: plantTesterUser.id,
            email: plantTesterUser.email
         };

         const sign = promisify(jwt.sign);
         token = await sign(payload, constants.jwtToken, { expiresIn: "10h" });

         plantTesterPlant = await plantRepository.createNewInstance({
            "name": "Giorgia the plant",
            "species": "Sunflower",
            "daysBetweenWater": 5,
            "lastTimeWater": new Date('05/21/2021'),
            "userId": plantTesterUser.id
         });
      });

      after(async () => {
         await userRepository.deleteInstanceByEmail(plantTesterUser.email);
      });
      
      it('Creates a plant if the body has the right fields', async () => {
         const testCreatePlant = {
            "name": "Fiorina the plant",
            "species": "Hibiscus",
            "daysBetweenWater": 3,
            "lastTimeWater": new Date('05/20/2021'),
            "userId": plantTesterUser.id
         };

         const response = await chai
            .request(app)
            .post('/api/plant/create-plant')
            .set({ Authorization: `Bearer ${token}` })
            .send(testCreatePlant);

         expect(response.status).to.equal(StatusCodes.OK);
      });

      it('Returns a Validation Error if the body does not have all the necessary fields', async () => {
         const testCreatePlant = {
            "nae": "Fiorina the plant",
            "species": "Hibiscus",
            "daysBetweenWater": 3,
            "latTimeWater": new Date('05/20/2021'),
            "usrId": plantTesterUser.id
         };

         const response = await chai
            .request(app)
            .post('/api/plant/create-plant')
            .set({ Authorization: `Bearer ${token}` })
            .send(testCreatePlant);

         expect(response.status).to.equal(StatusCodes.UNPROCESSABLE_ENTITY);
      });

      it('Returns a Conflict Error if the user has two plant with the same name', async () => {
         const testCreatePlant = {
            "name": "Giorgia the plant",
            "species": "Hibiscus",
            "daysBetweenWater": 3,
            "lastTimeWater": new Date('05/20/2021'),
            "userId": plantTesterUser.id
         };

         const response = await chai
            .request(app)
            .post('/api/plant/create-plant')
            .set({ Authorization: `Bearer ${token}` })
            .send(testCreatePlant);

         expect(response.status).to.equal(StatusCodes.CONFLICT);
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