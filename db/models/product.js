'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Product = db.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['Butler'],
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  // this is the total number of each star of ratings [1star, 2stars, 3stars, ...]
  ratingsTotal: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    defaultValue: [0, 0, 0, 0, 0]
  },
  images: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['http://fillmurray.com/140/200']
  }
}, {
  indexes: [{fields: ['name'], unique: true}, {fields: ['category']}],
  getterMethods: {
    averageRating: function () {
      return this.ratingsTotal.reduce((val, idx) => {
        return val * (idx + 1);
      }, 0);
    }
  },
  instanceMethods: {
    incrementRating: function (num) {
      const oldTotal = this.getDataValue('ratingsTotal');
      oldTotal[num - 1]++;
      this.setDataValue('ratingsTotal', oldTotal);
    }
  }
});


module.exports = Product;
