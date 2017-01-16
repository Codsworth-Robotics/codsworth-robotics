const router = require('express')();
const Product = require('APP/db/models/product');

// This route will only be triggered if a user follows a link to get to their cart
// If the session doesn't have a cart associated with it, it will create a cart
// Otherwise, the cart will be sent to the front-end
// If the cart is empty, on the front-end, the user will receive a message saying
// their cart is empty
router.get('/', (req, res, next) => {
  if (!req.session.cart) req.session.cart = [];
  res.json(req.session.cart);
});

// This route is triggered when you press any 'add to cart' button
// If the product already exists in the cart, increase the current quantity by 1
// If it doesn't already exist, find the product in the database, then push
// product info onto the cart array
// One either is done, send the cart array back to the client
router.put('/update', (req, res, next) => {
  for (let i = 0; i < req.session.cart.length; i++) {
    if (req.body.id === req.session.cart[i].id) {
      req.session.cart[i].quantity ++;
      res.json(req.session.cart);
    } else {
      Product.findById(req.body.id)
      .then(product => {
        req.session.cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          images: product.images,
          quantity: 1
        });
        res.json(req.session.cart);
      })
      .catch(next);
    }
  }
});

router.delete('/delete', (req, res, next) => {
  res.json('Item deleted from cart');
});

module.exports = router;
