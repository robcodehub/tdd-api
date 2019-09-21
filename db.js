const Sequelize = require('sequelize');
const { STRING, DECIMAL, UUID, UUIDV4 } = Sequelize;

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
      noteEmpty: true
    }
  }
  //NOTE: PUT IN DEPARTMENT ID REFERENCES DEPARTMENT ID

});


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
      noteEmpty: true
    }
  }
});

