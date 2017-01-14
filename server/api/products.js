const router = require('express')();
const Products = require('APP/db/models/product');

// find 'all' or search by category
router.get('/', (req, res, next) => {
  Products.findAll({where: req.query})
  .then(products => {
    res.json(products);
  })
  .catch(next);
});

// find by id
router.get('/:id', (req, res, next) => {
  Products.findById(req.params.id)
  .then(product => {
    res.json(product);
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
