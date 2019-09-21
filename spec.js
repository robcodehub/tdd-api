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

  describe('GET API', ()=> {
    it('gets data from /api/users',()=>{
      return app.get('/api/users')
        .expect(200)
        .then( response => {expect(response.body.length).to.equal(3);
        })
    });
  });

  /*
  describe('DELETE API', ()=> {
    it('deletes a user',()=>{
      return app.delete('/api/users/${seed.users.user1.id')
        .send({name: 'Rob'}
        .expect(204)
        })
    });
  });
*/


});
