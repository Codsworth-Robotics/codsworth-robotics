const router = require('express')();

//
//  /product router
//

router.get('/', (req, res, next) => {
  res.send('error page?');
});

router.get('/:id', (req, res, next) => {
  res.send('product detail view');
});

router.post('/', (req, res, next) => {
  res.send('adding product to db');
});

module.exports = router;
