const router = require('express')();
const Products = require('APP/db/models/product');

router.get('/', (req, res, next) => {
  let queryObj;

  if (req.query.id) queryObj.id = req.query.id;
  if (req.query.category) queryObj.category = req.query.category;

  Products.findAll({where: queryObj})
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
