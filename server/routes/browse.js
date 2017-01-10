const router = require('express')();
// const db = require('APP/db');

//
//  /browse router
//

router.get('/', (req, res, next) => {
  // will return top 20 results as json? probably?
  // res.status(115);
  res.send('browse available bots');
});

router.get('/:category', (req, res, next) => {
  res.send('browsing by category');
});

router.get('/:category/:filterText', (req, res, next) => {
  res.send('filtered search results');
});

module.exports = router;

