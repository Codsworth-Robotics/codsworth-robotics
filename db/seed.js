const db = require('APP/db');

const seedUsers = () => db.Promise.map([
  {firstName: 'so', lastName: 'many', email: 'god@example.com', password: '1234'},
  {firstName: 'Barack', lastName: 'Obama', email: 'barack@example.gov', password: '1234'},
  {firstName: 'Beth', lastName: 'Qiang', email: 'bqiang@fs.com', password: '1234'},
  {firstName: 'Mark', lastName: 'Hario', email: 'mhario@fs.com', password: '1234'},
  {firstName: 'Joey', lastName: 'Darbyshire', email: 'jdarbyshire@fs.com', password: '1234'}
], user => db.model('users').create(user));

const seedProducts = () => db.Promise.map([
  {name: 'Codsworth', description: 'The robot from Fallout now in your home!', price: 900.25},
  {name: 'C3PO', description: 'Fluent in over six million forms of communication', price: 17000.00},
  {name: 'Dot Matrix', description: 'Perfect for the runaway rebellious princess in your life!', price: 123.45},
  {name: 'Bending Unit 22', description: 'Runs on alcohol and the wallets of passerbys.', price: 3000.00},
  {name: 'Marvin', description: 'Comes with the all new Genuine People Personalities technology pre-installed!', price: 42.00}
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
        // console.log(`Creating ${randNum} guest ratings for ${product.name} with ${i} star`);
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
    console.log('Success!');
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
            console.log(`Created new Review for ${ratingProduct.name} rating ${rating.id}.  User for the review is ${createdReview.user_id} and for the rating is ${rating.user_id}`);
          });
        }));
      }
    });
    console.log(`Creating ${counter} random user reviews from ratings`);
    return db.Promise.all(arrOfReviewPromises);
  })
  .then(allReviews => {
    console.log('Success!');
    const arrOfOrderPromises = [];
    userArr.forEach(user => {
      const userOrder = Math.round(Math.random() * 5);
      for (let i = 0; i < userOrder; i++) {
        arrOfOrderPromises.push(db.model('orders').create({
          shippingAddress: '1234 Fake Lane, Nontown, Earth 12345'
        })
        .then(order => {
          const addProductToOrderArr = [];
          const numOfProducts = Math.floor(Math.random() * 10) + 1;
          for (let j = 0; j < numOfProducts; j++) {
            const userProduct = Math.floor(Math.random() * 5);
            addProductToOrderArr.push(order.addProductToOrder(productArr[userProduct]));
          }
          return db.Promise.all(addProductToOrderArr);
        }));
      }
    });
    return db.Promise.all(arrOfOrderPromises);
  })
  .catch(error => console.error(error))
  .finally(() => db.close());
