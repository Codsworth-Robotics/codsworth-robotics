const router = require('express')();
const User = require('APP/db/models/user');

const {mustBeLoggedIn, forbidden} = require('../auth.filters');

router.get('/', forbidden('only admins can list users'), (req, res, next) => {
  User.findAll()
  .then(users => res.json(users))
  .catch(next);
});

router.post('/', (req, res, next) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  })
  .then(user => {
    res.status(201).json(user);
  })
  .catch(next);
});

router.get('/orderHistory', (req, res, next) => {
  res.send('or-durrs');
});

router.get('/:id', mustBeLoggedIn, (req, res, next) => {
  User.findById(req.params.id)
  .then(user => res.json(user))
  .catch(next);
});

module.exports = router;
