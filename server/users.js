'use strict';

// const epilogue = require('./epilogue');
const db = require('APP/db');

const customUserRoutes = require('express').Router();

// Custom routes go here:
customUserRoutes.get('/puppy', (req, res) => {
  res.send('get puppy');
});

module.exports = customUserRoutes;
