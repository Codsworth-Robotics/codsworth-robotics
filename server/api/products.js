const router = require('express')();
const Products = require('APP/db/models/product');
const Reviews = require('APP/db/models/review');

// find 'all' or search by category
router.get('/', (req, res, next) => {
  Products.findAll({where: req.query})
  .then(products => {
    res.json(products);
  })
  .catch(next);
});

// load reviews by product id
router.get('/reviews/:id', (req, res, next) => {
  Reviews.findAll({
    where: {
      product_id: req.params.id
    }
  })
  .then(reviews => {
    res.json(reviews);
  })
  .catch(next);
});


// add product to database
router.post('/', (req, res, next) => {
  Products.create(req.body)
  .then(() => {
    res.sendStatus(201);
  })
  .catch(next);
});

module.exports = router;
