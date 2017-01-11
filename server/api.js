'use strict';

const api = module.exports = require('express').Router();

const db = require('APP/db');

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/auth', require('./auth'))
  .use('/users', require('./routes/users'))
  .use('/products', require('./routes/products'));

// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err);
});

// No routes matched? 404.
api.use((req, res) => res.status(404).end());
