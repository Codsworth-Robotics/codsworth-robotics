const router = require('express')();
const Order = require('APP/db/models/order');
const Product = require('APP/db/models/product');

router.post('/', (req, res, next) => {
  Order.create({
    email: req.body.email,
    shippingAddress: req.body.shippingAddress,
    user_id: req.user && req.user.id
  })
  .then(order => {
    return req.session.cart.products.map(product => {
      return Product.findById(product.id)
      .then(foundProduct =>
        order.addProductToOrder(foundProduct, product.quantity)
      );
    });
  })
  .then(order => {
    res.json(order);
  })
  .catch(error => console.error(error));
});

module.exports = router;
