const router = require('express')();
// const Product = require('APP/db/models/product');

// This route will only be triggered if a user follows a link to get to their cart
// If the session doesn't have a cart associated with it, it will create a cart
// Otherwise, the cart will be sent to the front-end
// If the cart is empty, on the front-end, the user will receive a message saying
// their cart is empty
router.get('/', (req, res, next) => {
  if (!req.session.cart) req.session.cart = [];
  res.json(req.session.cart);
});

router.post('/add', (req, res, next) => {
  res.json('Item added to cart');
});

router.put('/update', (req, res, next) => {
  res.json('Item quantity updated');
});

router.delete('/delete', (req, res, next) => {
  res.json('Item deleted from cart');
});

module.exports = router;
