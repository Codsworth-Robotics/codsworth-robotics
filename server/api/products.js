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
  Products.create({
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    inventory: req.body.inventory,
    ratingsTotal: req.body.ratingsTotal,
    images: req.body.images
  })
  .then(() => {
    res.sendStatus(201);
  })
  .catch(next);
});

module.exports = router;
