'use strict';

const api = module.exports = require('express').Router();

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/auth', require('./auth'))
  .use('/user', require('./routes/user'))
  .use('/browse', require('./routes/browse'))
  .use('/product', require('./routes/product'));

// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err);
});

// No routes matched? 404.
api.use((req, res) => res.status(404).end());
