const router = require('express')();
// const db = require('APP/db');

//
//  /checkout router
//

router.get('/', (req, res, next) => {
  res.send('checking out!');
});

module.exports = router;
