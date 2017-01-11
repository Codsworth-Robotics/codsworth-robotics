const router = require('express')();
const Products = require('APP/db/models/product');

//
//  /product router
//

router.get('/', (req, res, next) => {
  // Products.findAll()
  // .then(products => {
  // 	console.log(products);
  //   res.json(products);
  // });
});

router.get('/:id', (req, res, next) => {
  res.send('product detail view');
});

router.post('/', (req, res, next) => {
  res.send('adding product to db');
});

router.get('/:category', (req, res, next) => {
  res.send('browsing by category');
});

router.get('/:category/:filterText', (req, res, next) => {
  res.send('filtered search results');
});

module.exports = router;
