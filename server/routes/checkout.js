const router = require('express')();

//
//  /checkout router
//

router.get('/', (req, res, next) => {
  res.send('checking out!');
});

module.exports = router;
