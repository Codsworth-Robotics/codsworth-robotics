const router = require('express')();
const User = require('APP/db/models/user');
const Order = require('APP/db/models/order');

const {mustBeLoggedIn, forbidden} = require('../auth.filters');

// users should be able to only get THEIR orders
// and not anyone else's
// do some kind of check if req.user = :id for these routes

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

// get all orders for a logged in user
router.get('/:id/orders', mustBeLoggedIn, (req, res, next) => {
  User.findById(req.params.id)
  .then(user => {
    return Order.findAll({
      where: {
        user_id: user.id
      }
    });
  })
  .then(orders => {
    res.json(orders);
  })
  .catch(next);
});

// get the main user/account management page for a logged in user
router.get('/:id', mustBeLoggedIn, (req, res, next) => {
  User.findById(req.params.id)
  .then(user => res.json(user))
  .catch(next);
});

module.exports = router;
