const { expect } = require('chai');
const db = require('./db');
const { User } = db.models;

//NOTE: REQUIRE SUPER TEST LATER

describe('TDD Top Level seeding data', ()=> {

  let seed;

  beforeEach(async ()=> seed = await db.syncAndSeed());


  describe('basic name test', () => {
    it('fake test to test mocha / chai', () => {
      expect(seed.users.user1.name).to.equal('Rob');
    });

  });

});
