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
  {name: 'Marvin1', description: 'Comes with the all new Genuine People Personalities technology pre-installed! asdkfjhasldkhfauisdbvajrhbfkjafbgdfshvlasghfldhasflashdflkjashdfklhasdfklahsdklfhasdovihuqworevibuqiovubaoivhfboaisdbuvoaisdbviasbdviasdbviasbdvfasd', price: 4200, images: ['https://s-media-cache-ak0.pinimg.com/originals/cc/9a/c5/cc9ac53b36a3a9f0dd341d767d5e6fe7.png'], category: ['butler', 'chef', 'social', 'industrial'], inventory: 1}, {name: 'Codsworth2', description: 'The robot from Fallout now in your home!', price: 90025, images: ['http://vignette1.wikia.nocookie.net/fallout/images/8/80/Codsworth_model.png/revision/latest?cb=20160227140409'], category: ['butler', 'gardener', 'chef'], inventory: 100},
  {name: 'C3PO2', description: 'Fluent in over six million forms of communication', price: 1700000, images: ['https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png'], category: ['butler', 'household', 'translator'], inventory: 1},
  {name: 'Dot Matrix2', description: 'Perfect for the runaway rebellious princess in your life!', price: 12345, images: ['https://s-media-cache-ak0.pinimg.com/736x/48/d7/21/48d721c8b21e87e70f79779c3442a290.jpg'], category: ['maid', 'household', 'chef', 'royalty'], inventory: 0},
  {name: 'Bending Unit 222', description: 'Runs on alcohol and the wallets of passerbys. askjdhfiauefoqiweufiobfasdhfadklsbvasiobvqoruibvoyfvoadoaisdbvasdvasdvasdvaasdhsfhyzdydf', price: 300000, images: ['https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png'], category: ['industrial', 'social'], inventory: 1000000},
  {name: 'Marvin2', description: 'Comes with the all new Genuine People Personalities technology pre-installed!', price: 4200, images: ['https://s-media-cache-ak0.pinimg.com/originals/cc/9a/c5/cc9ac53b36a3a9f0dd341d767d5e6fe7.png'], category: ['butler', 'chef', 'social', 'industrial'], inventory: 1}, {name: 'Codsworth3', description: 'The robot from Fallout now in your home! asdfasdkfjugakuivbiubvobovaisdgvfoasidbvuoasdv', price: 90025, images: ['http://vignette1.wikia.nocookie.net/fallout/images/8/80/Codsworth_model.png/revision/latest?cb=20160227140409'], category: ['butler', 'gardener', 'chef'], inventory: 100},
  {name: 'C3PO3', description: 'Fluent in over six million forms of communication', price: 1700000, images: ['https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png'], category: ['butler', 'household', 'translator'], inventory: 1},
  {name: 'Dot Matrix3', description: 'Perfect for the runaway rebellious princess in your life!', price: 12345, images: ['https://s-media-cache-ak0.pinimg.com/736x/48/d7/21/48d721c8b21e87e70f79779c3442a290.jpg'], category: ['maid', 'household', 'chef', 'royalty'], inventory: 0},
  {name: 'Bending Unit 223', description: 'Runs on alcohol and the wallets of passerbys.', price: 300000, images: ['https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png'], category: ['industrial', 'social'], inventory: 1000000},
  {name: 'Marvin3', description: 'Comes with the all new Genuine People Personalities technology pre-installed! asdfklbaovbolakjsdbvoasdfaolsdfladkjsfhalsdkjbvbdkjsvlabksdfabdkjsglkjakdkjasfkjoavloadv', price: 4200, images: ['https://s-media-cache-ak0.pinimg.com/originals/cc/9a/c5/cc9ac53b36a3a9f0dd341d767d5e6fe7.png'], category: ['butler', 'chef', 'social', 'industrial'], inventory: 1}, {name: 'Codsworth4', description: 'The robot from Fallout now in your home!', price: 90025, images: ['http://vignette1.wikia.nocookie.net/fallout/images/8/80/Codsworth_model.png/revision/latest?cb=20160227140409'], category: ['butler', 'gardener', 'chef'], inventory: 100},
  {name: 'C3PO4', description: 'Fluent in over six million forms of communicationhjgasdfoasdgflkjasdbhkljbnvaloisdvhoaisvuaosdvuihdhaldkjsfvhoaajdlsvbhoaodvfbhalsdkjfhasldkfjhasdovjiahsdovaspvasdvasdovasdvasdvhaposdvkjklbnqkjbwerqkjbk1j5klj45lkjhadfkjshasdfadhksf7asdfklasdg8adsliv8adsviasdv89asdiva89sdvkadsv90asdviasd89vvhb8avgv0av', price: 1700000, images: ['https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png'], category: ['butler', 'household', 'translator'], inventory: 1},
  {name: 'Dot Matrix4', description: 'Perfect for the runaway rebellious princess in your life!', price: 12345, images: ['https://s-media-cache-ak0.pinimg.com/736x/48/d7/21/48d721c8b21e87e70f79779c3442a290.jpg'], category: ['maid', 'household', 'chef', 'royalty'], inventory: 0},
  {name: 'Bending Unit 224', description: 'Runs on alcohol and the wallets of passerbys.', price: 300000, images: ['https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png'], category: ['industrial', 'social'], inventory: 1000000},
  {name: 'Marvin4', description: 'Comes with the all new Genuine People Personalities technology pre-installed!', price: 4200, images: ['https://s-media-cache-ak0.pinimg.com/originals/cc/9a/c5/cc9ac53b36a3a9f0dd341d767d5e6fe7.png'], category: ['butler', 'chef', 'social', 'industrial'], inventory: 1}, {name: 'Codsworth5', description: 'The robot from Fallout now in your home!', price: 90025, images: ['http://vignette1.wikia.nocookie.net/fallout/images/8/80/Codsworth_model.png/revision/latest?cb=20160227140409'], category: ['butler', 'gardener', 'chef'], inventory: 100},
  {name: 'C3PO5', description: 'Fluent in over six million forms of communication', price: 1700000, images: ['https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png'], category: ['butler', 'household', 'translator'], inventory: 1},
  {name: 'Dot Matrix5', description: 'Perfect for the runaway rebellious princess in your life!a89dtas9d8va89gsd7gva78as89dv7ga9sd8v7ga0s8d7vgq07gf07g04gf87gsv76fagv76ta87vga80sd7gv80a7dgsv807adgsvasd534vf56as3d65vafsv976ag897vga8sd7vg0a8sdv7gasdvasdv', price: 12345, images: ['https://s-media-cache-ak0.pinimg.com/736x/48/d7/21/48d721c8b21e87e70f79779c3442a290.jpg'], category: ['maid', 'household', 'chef', 'royalty'], inventory: 0},
  {name: 'Bending Unit 225', description: 'Runs on alcohol and the wallets of passerbys.', price: 300000, images: ['https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png'], category: ['industrial', 'social'], inventory: 1000000},
  {name: 'Marvin5', description: 'Comes with the all new Genuine People Personalities technology pre-installed!', price: 4200, images: ['https://s-media-cache-ak0.pinimg.com/originals/cc/9a/c5/cc9ac53b36a3a9f0dd341d767d5e6fe7.png'], category: ['butler', 'chef', 'social', 'industrial'], inventory: 1}, {name: 'Codsworth6', description: 'The robot from Fallout now in your home!', price: 90025, images: ['http://vignette1.wikia.nocookie.net/fallout/images/8/80/Codsworth_model.png/revision/latest?cb=20160227140409'], category: ['butler', 'gardener', 'chef'], inventory: 100},
  {name: 'C3PO6', description: 'Fluent in over six million forms of communication', price: 1700000, images: ['https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png'], category: ['butler', 'household', 'translator'], inventory: 1},
  {name: 'Dot Matrix6', description: 'Perfect for the runaway rebellious princess in your life!a89st7va87dtvfd7gfsv087adsgv07gasdv078gasd80v7gas80dgv807asgdv80gasdvg08a7ty34yr8923y4h9gfh2893ghf9834hf92834hf9820934fh2307894gf2304gb34f78b4f9b34fb134f70238407bf238740bgf23784g74gb4f870b3vf780b34v807b34v807b34v807g34807vb34807gf18074gf1784gf3f3r83gr8013g83g813gr3gf180r3g1023gr803gf8g780vf180v7871780gf13re01835415789456vb8976348957g9485f63458926345897264ty9g9f6agsd9ga8rt79yar78tayr80e7tgae80r7tga8r70tgasdr807ty0s8r7tysar780tgs80r7tg', price: 12345, images: ['https://s-media-cache-ak0.pinimg.com/736x/48/d7/21/48d721c8b21e87e70f79779c3442a290.jpg'], category: ['maid', 'household', 'chef', 'royalty'], inventory: 0},
  {name: 'Bending Unit 226', description: 'Runs on alcohol and the wallets of passerbys.', price: 300000, images: ['https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png'], category: ['industrial', 'social'], inventory: 1000000},
  {name: 'Marvin6', description: 'Comes with the all new Genuine People Personalities technology pre-installed!sd9f7tgn6tfg89t29834bt892634t987b643b6v57896bv789ab6st789a6t7896s89dt76a986tv9ad7s6t98ad67st8as6tb87as6t9b7na687t6w89bnt74b6n5b740625674545289374590674b5n786444444876dfst8956dfst8956as89r79are6t789rt9786bt8nb76ar789t6a89r7e6t897a6rt897ab6et7896ba89r7t6a8976rt89756r894t5289689648972648972634897g6237894t6289346t98634t8972634t892638947t623896t4289364t89634t8972634t7892638947t6289364t892634t', price: 4200, images: ['https://s-media-cache-ak0.pinimg.com/originals/cc/9a/c5/cc9ac53b36a3a9f0dd341d767d5e6fe7.png'], category: ['butler', 'chef', 'social', 'industrial'], inventory: 1}
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
