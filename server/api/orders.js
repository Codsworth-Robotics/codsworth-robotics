const router = require('express')();
const Order = require('APP/db/models/order');
const Product = require('APP/db/models/product');
const sendEmail = require('APP/server/send-email');

router.post('/', (req, res, next) => {
  const email = req.body.email;
  let orderNum;

  Order.create({
    email: req.body.email,
    shippingAddress: req.body.shippingAddress,
    user_id: req.user && req.user.id
  })
  .then(order => {
    orderNum = order.orderID;
    return req.session.cart.products.map(product => {
      return Product.findById(product.id)
      .then(foundProduct =>
        order.addProductToOrder(foundProduct, product.quantity)
      );
    });
  })
  .then(() => {
    sendEmail(
      email,
      'Your Recent Codsworth Robotics Order',
      `"Drive sports cars, date movie stars, buy things that are not for sale... who knows? You start pretending to have fun, you might even have a little by accident."
      Thank you for your recent Codsworth Robotics order.
      Your order number is ${orderNum}. Please keep this for your records.`
      );
    req.session.cart = { products: [], total: 0 };
    res.json(req.session.cart);
  })
  .catch(next);
});

module.exports = router;
