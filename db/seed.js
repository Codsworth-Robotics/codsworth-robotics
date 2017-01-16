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
  {name: 'Marvin', description: 'Comes with the all new Genuine People Personalities technology pre-installed!', price: 4200, images: ['https://s-media-cache-ak0.pinimg.com/originals/cc/9a/c5/cc9ac53b36a3a9f0dd341d767d5e6fe7.png'], category: ['butler', 'chef', 'social', 'industrial'], inventory: 1}, {name: 'Codsworth1', description: 'The robot from Fallout now in your home!', price: 90025, images: ['http://vignette1.wikia.nocookie.net/fallout/images/8/80/Codsworth_model.png/revision/latest?cb=20160227140409'], category: ['butler', 'gardener', 'chef'], inventory: 100},
  {name: 'C3PO1', description: 'Fluent in over six million forms of communication', price: 1700000, images: ['https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png'], category: ['butler', 'household', 'translator'], inventory: 1},
  {name: 'Dot Matrix1', description: 'Perfect for the runaway rebellious princess in your life!', price: 12345, images: ['https://s-media-cache-ak0.pinimg.com/736x/48/d7/21/48d721c8b21e87e70f79779c3442a290.jpg'], category: ['maid', 'household', 'chef', 'royalty'], inventory: 0},
  {name: 'Bending Unit 221', description: 'Runs on alcohol and the wallets of passerbys.', price: 300000, images: ['https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png'], category: ['industrial', 'social'], inventory: 1000000},
  {name: 'Marvin1', description: 'Comes with the all new Genuine People Personalities technology pre-installed! asdkfjhas ld khfaui sdbvajr hbfkjafbgdf sh vlasghf ldh asflashdflkjashdfklhas dfklahsd klfhasdov ihuqw orevibu qiovubaoivhf boais dbuvo aisdb vi asbdvi asdb viasb vfa sd', price: 4200, images: ['https://s-media-cache-ak0.pinimg.com/originals/cc/9a/c5/cc9ac53b36a3a9f0dd341d767d5e6fe7.png'], category: ['butler', 'chef', 'social', 'industrial'], inventory: 1}, {name: 'Codsworth2', description: 'The robot from Fallout now in your home!', price: 90025, images: ['http://vignette1.wikia.nocookie.net/fallout/images/8/80/Codsworth_model.png/revision/latest?cb=20160227140409'], category: ['butler', 'gardener', 'chef'], inventory: 100},
  {name: 'C3PO2', description: 'Fluent in over six million forms of communication', price: 1700000, images: ['https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png'], category: ['butler', 'household', 'translator'], inventory: 1},
  {name: 'Dot Matrix2', description: 'Perfect for the runaway rebellious princess in your life!', price: 12345, images: ['https://s-media-cache-ak0.pinimg.com/736x/48/d7/21/48d721c8b21e87e70f79779c3442a290.jpg'], category: ['maid', 'household', 'chef', 'royalty'], inventory: 0},
  {name: 'Bending Unit 222', description: 'Runs on alcohol and the wallets of passerbys. ask jdhfia uefoqi weufi obfasdhfadkl sbvas iobvqo ruibvo yfv oa doa isdbva sdvasd vasdv aasd sfhyzd ydf', price: 300000, images: ['https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png'], category: ['industrial', 'social'], inventory: 1000000},
  {name: 'Marvin2', description: 'Comes with the all new Genuine People Personalities technology pre-installed!', price: 4200, images: ['https://s-media-cache-ak0.pinimg.com/originals/cc/9a/c5/cc9ac53b36a3a9f0dd341d767d5e6fe7.png'], category: ['butler', 'chef', 'social', 'industrial'], inventory: 1}, {name: 'Codsworth3', description: 'The robot from Fallout now in your home! asdfas dkfju gak ui vb iu bvobo vai sdgvfo asid bvuoa sdv', price: 90025, images: ['http://vignette1.wikia.nocookie.net/fallout/images/8/80/Codsworth_model.png/revision/latest?cb=20160227140409'], category: ['butler', 'gardener', 'chef'], inventory: 100},
  {name: 'C3PO3', description: 'Fluent in over six million forms of communication', price: 1700000, images: ['https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png'], category: ['butler', 'household', 'translator'], inventory: 1},
  {name: 'Dot Matrix3', description: 'Perfect for the runaway rebellious princess in your life!', price: 12345, images: ['https://s-media-cache-ak0.pinimg.com/736x/48/d7/21/48d721c8b21e87e70f79779c3442a290.jpg'], category: ['maid', 'household', 'chef', 'royalty'], inventory: 0},
  {name: 'Bending Unit 223', description: 'Runs on alcohol and the wallets of passerbys.', price: 300000, images: ['https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png'], category: ['industrial', 'social'], inventory: 1000000},
  {name: 'Marvin3', description: 'Comes with the all new Genuine People Personalities technology pre-installed! asdf klbaov bolakjsd  bvoa sdfao lsdf la dk jsf hals dkjbvb dkj svlabks dfabdk jsglkjakdkj asf kjoav loadv', price: 4200, images: ['https://s-media-cache-ak0.pinimg.com/originals/cc/9a/c5/cc9ac53b36a3a9f0dd341d767d5e6fe7.png'], category: ['butler', 'chef', 'social', 'industrial'], inventory: 1}, {name: 'Codsworth4', description: 'The robot from Fallout now in your home!', price: 90025, images: ['http://vignette1.wikia.nocookie.net/fallout/images/8/80/Codsworth_model.png/revision/latest?cb=20160227140409'], category: ['butler', 'gardener', 'chef'], inventory: 100},
  {name: 'C3PO4', description: 'Fluent in over six million forms of communication h j gasdf oasdgfl kjasd bhklj bnv  aloi sdv h oaisv ua osdv ui hd ha ldk jsfv hoaajd lsvb hoaod vfbh alsd kj fh asl dkfj hasd ovjiah sdo vaspvas dvas dovasdv asdvh aposd vkjkl bnqkjbw erqk jbk1j5klj 45lkj hadf kjsh as dfad hksf 7asdf klasdg 8adsli v8adsv ia  sdv89 as diva 89sdv kadsv9 0as dviasd8 9vv hb8a vgv 0av', price: 1700000, images: ['https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png'], category: ['butler', 'household', 'translator'], inventory: 1},
  {name: 'Dot Matrix4', description: 'Perfect for the runaway rebellious princess in your life!', price: 12345, images: ['https://s-media-cache-ak0.pinimg.com/736x/48/d7/21/48d721c8b21e87e70f79779c3442a290.jpg'], category: ['maid', 'household', 'chef', 'royalty'], inventory: 0},
  {name: 'Bending Unit 224', description: 'Runs on alcohol and the wallets of passerbys.', price: 300000, images: ['https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png'], category: ['industrial', 'social'], inventory: 1000000},
  {name: 'Marvin4', description: 'Comes with the all new Genuine People Personalities technology pre-installed!', price: 4200, images: ['https://s-media-cache-ak0.pinimg.com/originals/cc/9a/c5/cc9ac53b36a3a9f0dd341d767d5e6fe7.png'], category: ['butler', 'chef', 'social', 'industrial'], inventory: 1}, {name: 'Codsworth5', description: 'The robot from Fallout now in your home!', price: 90025, images: ['http://vignette1.wikia.nocookie.net/fallout/images/8/80/Codsworth_model.png/revision/latest?cb=20160227140409'], category: ['butler', 'gardener', 'chef'], inventory: 100},
  {name: 'C3PO5', description: 'Fluent in over six million forms of communication', price: 1700000, images: ['https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png'], category: ['butler', 'household', 'translator'], inventory: 1},
  {name: 'Dot Matrix5', description: 'Perfect for the runaway rebellious princess in your life! a89d  ta s9d8va 89gsd7gv a78as89dv7g a9s d8v7ga0s8 d7vgq 07gf07g 04gf87 gsv76f a  gv76t a87vga 80sd7gv80a  7dgsv 807ad gsvas  d53 4vf56 as3 d65vafs v976ag 897vg a8sd7 vg0a8s  dv 7gas dva sdv', price: 12345, images: ['https://s-media-cache-ak0.pinimg.com/736x/48/d7/21/48d721c8b21e87e70f79779c3442a290.jpg'], category: ['maid', 'household', 'chef', 'royalty'], inventory: 0},
  {name: 'Bending Unit 225', description: 'Runs on alcohol and the wallets of passerbys.', price: 300000, images: ['https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png'], category: ['industrial', 'social'], inventory: 1000000},
  {name: 'Marvin5', description: 'Comes with the all new Genuine People Personalities technology pre-installed!', price: 4200, images: ['https://s-media-cache-ak0.pinimg.com/originals/cc/9a/c5/cc9ac53b36a3a9f0dd341d767d5e6fe7.png'], category: ['butler', 'chef', 'social', 'industrial'], inventory: 1}, {name: 'Codsworth6', description: 'The robot from Fallout now in your home!', price: 90025, images: ['http://vignette1.wikia.nocookie.net/fallout/images/8/80/Codsworth_model.png/revision/latest?cb=20160227140409'], category: ['butler', 'gardener', 'chef'], inventory: 100},
  {name: 'C3PO6', description: 'Fluent in over six million forms of communication', price: 1700000, images: ['https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png'], category: ['butler', 'household', 'translator'], inventory: 1},
  {name: 'Dot Matrix6', description: 'Perfect for the runaway rebellious princess in your life! a89st7 va87d tvfd 7gfsv 087adsgv 07gasd v078  gasd 80v7ga s80dg v807a sgd v80gas dvg 08a7t y34yr8 923y4h 9gf h289 3g hf9 834 hf 92  83 4hf98 2093 4fh23 07894g  f230 4gb34 f78b 4f9b3 4fb134 f70238 407bf23 874 0bgf 23784g 74g b4f870 b3v  f780b34 v80 7b34v 807b 34v807 g3 4807vb3 48 07gf 1807 4gf17 84gf3 f3r83gr  801 3g83g 81  3gr3g f18 0r3g10  23g   9456 vb8  9763 48957 g9485 f634 589 2634589   7264 ty9g 9f6ag sd9ga 8rt79y  ar 78tay r80 e7 tgae 8 0 r7tga8  r70tg asdr 807 ty0s 8r7t ysar  780tgs  80r 7tg', price: 12345, images: ['https://s-media-cache-ak0.pinimg.com/736x/48/d7/21/48d721c8b21e87e70f79779c3442a290.jpg'], category: ['maid', 'household', 'chef', 'royalty'], inventory: 0},
  {name: 'Bending Unit 226', description: 'Runs on alcohol and the wallets of passerbys.', price: 300000, images: ['https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png'], category: ['industrial', 'social'], inventory: 1000000},
  {name: 'Marvin6', description: 'Comes with the all new Genuine People Personalities technology pre-installed! sd9  f7tg n6 tfg89 t298 34bt  892634t 987 b643b 6v5789 6bv 789ab 6s t789a  6t7896s 89d t76  a986 tv 9ad7s 6t9 8ad 67st8 as6tb 87as6 t9b7 na68 7t6w8 9bnt7  4b6n5b 74062 567 4545 289374 5906 74b5 n7 86444 44 4876df st8 956dfst8 956a s89r 79are6 t78 9rt9786 bt8 nb76 ar7 89t6a 89 r7e6 t897a 6rt8 97ab 6et7 896b a89r 7t6 a897  6rt897 56r8 94t52896 8964 897264 8972 634897g 6237894 t6289346t986 34t897 26 34t8 926389 47t 62389 6t4 28936  4t89 634t897 263 4t789 2 638947 t628 9364t8 92 63 4t', price: 4200, images: ['https://s-media-cache-ak0.pinimg.com/originals/cc/9a/c5/cc9ac53b36a3a9f0dd341d767d5e6fe7.png'], category: ['butler', 'chef', 'social', 'industrial'], inventory: 1}
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
          email: 'someone@somewhere.com',
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
