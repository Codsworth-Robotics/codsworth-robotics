const router = require('express')();
const Users = require('APP/db/models/user');

router.get('/', (req, res, next) => {
  res.send('user profile view');
});

router.get('/orderHistory', (req, res, next) => {
  res.send('or-durrs');
});

router.get('/:id', (req, res, next) => {
  if (!req.user) {
    res.sendStatus(401);
  }
});

router.post('/', (req, res, next) => {
  Users.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  })
  .then(() => {
    res.sendStatus(201);
  })
  .catch(next);
});

module.exports = router;
