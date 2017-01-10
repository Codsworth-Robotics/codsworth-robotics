'use strict';

const epilogue = require('./epilogue');
const db = require('APP/db');

const customUserRoutes = require('express')();

// Custom routes go here:
customUserRoutes.use('/browse', require('./routes/browse'));
customUserRoutes.use('/product', require('./routes/product'));
customUserRoutes.use('/user', require('./routes/user'));


module.exports = customUserRoutes;

// Epilogue will automatically create standard RESTful routes
const users = epilogue.resource({
  model: db.model('users'),
  endpoints: ['/users', '/users/:id']
});

const {mustBeLoggedIn, selfOnly, forbidden} = epilogue.filters;
users.delete.auth(mustBeLoggedIn);
users.delete.auth(selfOnly('delete'));
users.list.auth(forbidden('cannot list users'));
users.read.auth(mustBeLoggedIn);
