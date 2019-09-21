const express = require('express');
const app = express();
const db = require('./db');
const { User } = db.models;
const { pluralize } = require('inflection');

module.exports = app;

app.use(express.json());
app.use(require('cors')());

app.get('/api/users', (req, res, next)=>{
  User.findAll()
    .then(users => res.send(users))
    .catch(next);
  });


app.delete('/api/users/:id', (req, res, next) => {
  User.findByPk(req.params.id)
  .then(user => user.destroy())
  .then(() => res.sendStatus(204))
  .catch(next);
});
