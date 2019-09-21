const express = require('express');
const app = express();
const db = require('./db');
const { User } = db.models;
const { pluralize } = require('inflection');

module.exports = app;

app.use(express.json);
