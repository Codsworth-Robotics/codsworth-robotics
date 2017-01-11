const router = require('express')();
const Products = require('APP/db/models/product');

router.get('/', (req, res, next) => {
  res.send('products page');
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
