const router = require('express')();
const Users = require('APP/db/models/user');
// const db = require('APP/db');

//
//  /user router
//

router.get('/', (req, res) => {
  res.send('user profile view');
});

router.get('/orderHistory', (req, res) => {
  res.send('or-durrs');
});

router.post('/createAcct', (req, res, next) => {
  Users.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  })
  .then((userName) => {
    res.redirect('/');
  })
  .catch(next);
});

module.exports = router;
