const router = require('express')();
const Order = require('APP/db/models/order');

// router.get('/', (req, res, next) => {
//   res.json(req.user);
// });

router.post('/', (req, res, next) => {
  Order.create({
    shippingAddress: req.body.shippingAddress,
    totalPrice: req.body.totalPrice,
    user_id: req.user.id
  })
  .then(order => {
    res.json(order);
  })
  .catch(next);
});

module.exports = router;
