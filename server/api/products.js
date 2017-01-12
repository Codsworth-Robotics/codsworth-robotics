const router = require('express')();
const Products = require('APP/db/models/product');

router.get('/', (req, res, next) => {
  Products.findAll()
  .then(products => {
    res.json(products);
  })
  .catch(next);
});

router.get('/:id', (req, res, next) => {
  Products.findById(req.params.id)
  .then(products => {
    res.json(products);
  })
  .catch(next);
});

router.post('/', (req, res, next) => {
  Products.create({
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price
  })
  .then(() => {
    res.send('created!');
  });
  // OB/EPS: missing error handling
});

// OB/EPS: more standard RESTful URL GET /api/products?category=butler
router.get('/cat/:category', (req, res, next) => {
  Products.findAll({
    where: {
      category: req.params.category
    }
  })
  .then(products => {
    res.send(products);
  })
  .catch(next);
});

// OB/EPS: could also incorporate into query string
router.get('/cat/:category/:filterText', (req, res, next) => {
  res.send('filtered search results');
});

module.exports = router;
