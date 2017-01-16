const db = require('APP/db');

const seedUsers = () => db.Promise.map([
  {firstName: 'so', lastName: 'many', email: 'god@example.com', password: '1234'},
  {firstName: 'Barack', lastName: 'Obama', email: 'barack@example.gov', password: '1234'},
  {firstName: 'Beth', lastName: 'Qiang', email: 'bqiang@fs.com', password: '1234'},
  {firstName: 'Mark', lastName: 'Hario', email: 'mhario@fs.com', password: '1234'},
  {firstName: 'Joey', lastName: 'Darbyshire', email: 'jdarbyshire@fs.com', password: '1234'}
], user => db.model('users').create(user));

const seedProducts = () => db.Promise.map([
  {name: 'Codsworth', description: 'The robot from Fallout now in your home!', price: 90025, images: ['http://vignette1.wikia.nocookie.net/fallout/images/8/80/Codsworth_model.png/revision/latest?cb=20160227140409'], category: ['butler', 'gardener', 'chef'], inventory: 100},
  {name: 'C3PO', description: 'Fluent in over six million forms of communication', price: 1700000, images: ['https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png'], category: ['butler', 'household', 'translator'], inventory: 1},
  {name: 'Dot Matrix', description: 'Perfect for the runaway rebellious princess in your life!', price: 12345, images: ['https://s-media-cache-ak0.pinimg.com/736x/48/d7/21/48d721c8b21e87e70f79779c3442a290.jpg'], category: ['maid', 'household', 'chef', 'royalty'], inventory: 0},
  {name: 'Bending Unit 22', description: 'Runs on alcohol and the wallets of passerbys.', price: 300000, images: ['https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png'], category: ['industrial', 'social'], inventory: 1000000},
  {name: 'Marvin', description: 'Comes with the all new Genuine People Personalities technology pre-installed!', price: 4200, images: ['https://s-media-cache-ak0.pinimg.com/originals/cc/9a/c5/cc9ac53b36a3a9f0dd341d767d5e6fe7.png'], category: ['butler', 'chef', 'social', 'industrial'], inventory: 1}
], product => db.model('products').create(product));

let userArr, productArr;

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => {
    userArr = users;
    console.log(`Seeded ${users.length} users OK`);
  })
  .then(seedProducts)
  .then(products => {
    console.log(`Seeded ${products.length} products OK`);
    productArr = products;
    const arrOfRatingPromises = [];
    let counter = 0;
    products.forEach(product => {
      // runs 5 times, once for each star
      for (let i = 1; i < 6; i++) {
        // Creates up to 5 i star ratings for each product
        let randNum = Math.round(Math.random() * 5);
        for (randNum; randNum > 0; randNum--) {
          counter++;
          arrOfRatingPromises.push(db.model('ratings').create({
            stars: i
          })
          .then(rating => {
            return rating.setProduct(product);
          })
          .catch(err => {
            console.log(`Error with Product: ${product.name}! ${err}`);
          }));
        }
      }
    });
    console.log(`Creating ${counter} random guest ratings`);
    return db.Promise.all(arrOfRatingPromises);
  })
  .then(allRatings => {
    const arrOfReviewPromises = [];
    let counter = 0;
    allRatings.forEach(rating => {
      const userReview = Math.round(Math.random() * 4);
      let createdReview;
      if (userReview === 4) {
        counter++;
        const randUser = Math.floor(Math.random() * userArr.length);
        arrOfReviewPromises.push(db.model('reviews').create({
          title: 'Random Review Name',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur venenatis quam non elementum. In semper erat in ligula iaculis, eu mattis velit maximus. Vivamus.'
        })
        .then(review => {
          createdReview = review;
          review.setUser(userArr[randUser]);
          rating.setUser(userArr[randUser]);
          review.setRating(rating);
          return rating.getProduct();
        })
        .then(ratingProduct => {
          return createdReview.setProduct(ratingProduct)
          .then(updatedReview => {
            const reviewUser = userArr.find(user => {
              return user.id === createdReview.user_id;
            });
            console.log(`Created new Review for ${ratingProduct.name} rating ${rating.id}.  User for the review is ${reviewUser.displayName} and for the rating is ${rating.user_id}`);
          });
        }));
      }
    });
    console.log(`Creating ${counter} random user reviews from ratings`);
    return db.Promise.all(arrOfReviewPromises);
  })
  .then(allReviews => {
    const arrOfOrderPromises = [];
    userArr.map(user => {
      const userOrder = Math.round(Math.random() * 5);
      for (let i = 0; i < userOrder; i++) {
        arrOfOrderPromises.push(db.model('orders').create({
          shippingAddress: '1234 Fake Lane, Nontown, Earth 12345'
        })
        .then(order => {
          return order.setUser(user);
        })
        .then(order => {
          return order;
        }));
      }
    });
    return db.Promise.all(arrOfOrderPromises);
  })
  .then(orders => {
    const addProductToOrderArr = [];
    orders.map(order => {
      let productCounter = 0;
      let numOfProducts = 0;
      productArr.map(product => {
        numOfProducts = Math.floor(Math.random() * 4);
        if (numOfProducts > 0) {
          addProductToOrderArr.push(order.addProductToOrder(product, numOfProducts));
        }
        productCounter += numOfProducts;
      });
      const orderUser = userArr.find(user => {
        return user.id === order.user_id;
      });
      console.log(`Added ${productCounter} random products to order Number ${order.orderID} for User ${orderUser.displayName}`);
    });
    return db.Promise.all(addProductToOrderArr);
  })
  .then(products => {
    console.log('Finished!!');
  })
  .catch(error => console.error(error))
  .finally(() => db.close());
