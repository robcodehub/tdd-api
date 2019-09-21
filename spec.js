const { expect } = require('chai');
const db = require('./db');
const { User } = db.models;
const app = require('supertest')(require('./app'));


describe('TDD Top Level seeding data', ()=> {

  let seed;

  beforeEach(async ()=> seed = await db.syncAndSeed());


  describe('basic name test', () => {
    it('fake test to test mocha / chai', () => {
      expect(seed.users.user1.name).to.equal('Rob');
    });

  });

  describe('API', ()=> {
    it('get /api/users',()=>{
      return app.get('/api/users')
        .expect(200)
        .then( response => {expect(response.body.length).to.equal(3);
        })
    })
  })


});
