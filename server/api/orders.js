const router = require('express')();
const Order = require('APP/db/models/order');
const Product = require('APP/db/models/product');

// information that needs to be sent as part of the order:
// order table
  // address
  // totalPrice
  // user_id, if available...not sure sequelize will be happy about us not including it?
// orderproducts table
  // find order id
  // product ids
  // price per product
  // quantity
// email???? --> will probably need to create column in orders table

// check total price before creating

router.post('/', (req, res, next) => {
  Order.create({
    // email: req.body.email
    shippingAddress: req.body.shippingAddress,
    user_id: req.user.id
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
    console.log(order);
    res.json(order);
  })
  .catch(error => console.error(error));
});

module.exports = router;
