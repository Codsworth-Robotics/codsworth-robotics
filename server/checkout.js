const router = require('express')();
// const db = require('APP/db');

//
//  /checkout router
//

// OB/EPS: this could be a POST to /api/orders
router.get('/', (req, res, next) => {
  res.send('checking out!');
});

module.exports = router;
