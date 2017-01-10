const router = require('express')();
const Users = require('APP/db/models/user');

//
//  /user router
//

router.get('/', (req, res) => {
  res.send('user profile view');
});

router.get('/orderHistory', (req, res) => {
  res.send('or-durrs');
});

router.post('/createAcct', (req, res) => {
  // console.log('req.body is:', req);

  // WORK IN PROCESS, this function b0rked
  Users.create({
    firstName: 'mark',
    lastName: 'hario',
    email: 'req.body.email@email.com'
  })
  .then(() => {
    res.send('lol no account for you');
  })
  .catch((err) => {
    console.error('err! ', err);
    res.end();
  });
});

router.post('/logout', (req, res) => {
  res.send('loggin oot');
});

module.exports = router;
