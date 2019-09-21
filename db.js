const Sequelize = require('sequelize');
const { STRING, DECIMAL, UUID, UUIDV4 } = Sequelize;

console.log("TESTING!!!!!!!!!!!!!!! ====================");

const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/tdd_api_db');


const User = conn.define('user', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
  //NOTE: PUT IN DEPARTMENT ID REFERENCES DEPARTMENT ID

});

/*
const Department = conn.define('department', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});
*/

const syncAndSeed = async() => {

  await conn.sync( { force: true } );

  const users = [
    {name: 'Rob'},
    {name: 'Philip'},
    {name: 'Moe'}
  ];


const [user1, user2, user3] = await Promise.all(users.map (user => User.create(user)));



return {
  users: {
    user1,
    user2,
    user3
  }
}
};

module.exports = {
  syncAndSeed,
  models: {
    User
  }
}
