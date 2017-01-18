const router = require('express')();
const Product = require('APP/db/models/product');

// To calculate the total price of the order, given the items in the cart
function calculateOrderTotal (products) {
  let total = 0;
  products.forEach(product =>
    total += product.price * product.quantity
  );
  return total;
}

// This route will only be triggered if a user follows a link to get to their cart
// If the session doesn't have a cart associated with it, it will create a cart
// Otherwise, the cart will be sent to the front-end
// If the cart is empty, on the front-end, the user will receive a message saying
// their cart is empty
router.get('/', (req, res, next) => {
  if (!req.session.cart) req.session.cart = { products: [], total: 0 };
  res.json(req.session.cart);
});

// This route is triggered when you press any 'add to cart' button
// If your cart doesn't already exist, make a new array to hold it
// Go through the cart - if the product already exists in the cart, increase the current quantity by 1
// If the product isn't in your cart, push relevant product info to cart
// One either is done, send the cart array back to the client
router.put('/', (req, res, next) => {
  if (!req.session.cart) req.session.cart = { products: [], total: 0 };
  let found = false;
  for (let i = 0; i < req.session.cart.products.length; i++) {
    if (req.body.id === req.session.cart.products[i].id) {
      if (req.body.quantity) {
        const oldQuantity = req.session.cart.products[i].quantity;
        req.session.cart.products[i].quantity += req.body.quantity - oldQuantity;
        if (req.session.cart.products[i].quantity === 0) {
          req.session.cart.products.splice(i, 1);
        }
      } else {
        req.session.cart.products[i].quantity ++;
      }
      req.session.cart.total = calculateOrderTotal(req.session.cart.products);
      res.json(req.session.cart);
      found = true;
      break;
    }
  }
  if (found === false) {
    Product.findById(req.body.id)
    .then(product => {
      req.session.cart.products.push({
        id: product.id,
        name: product.name,
        category: product.category,
        description: product.description,
        price: product.price,
        inventory: product.inventory,
        ratingsTotal: product.ratingsTotal,
        images: product.images,
        quantity: 1
      });
      req.session.cart.total += product.price;
      res.json(req.session.cart);
    })
    .catch(next);
  }
});

router.delete('/:productId', (req, res, next) => {
  req.session.cart.products = req.session.cart.products.filter(product =>
    product.id !== +req.params.productId
  );
  req.session.cart.total = calculateOrderTotal(req.session.cart.products);
  res.json(req.session.cart);
});

module.exports = router;
