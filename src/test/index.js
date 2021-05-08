const { expect } = require('chai');

process.env.NODE_ENV = "test";

describe('Initialize Tests with Chai and Mocha', () => {
   it('True is True', () => {
      expect(true).to.equal(true);
   });

   it('False is False', () => {
      expect(false).to.equal(false);
   });
})