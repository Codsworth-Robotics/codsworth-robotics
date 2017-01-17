'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const Product = require('./product');
const Order = require('./order');
const OrderProduct = require('./orderProduct');
const Review = require('./review');
const Rating = require('./rating');
const OAuth = require('./oauth');

Order.belongsTo(User);
User.hasMany(Order);

Order.belongsToMany(Product, { through: OrderProduct });
Product.belongsToMany(Order, { through: OrderProduct });

Review.belongsTo(Product);
Product.hasMany(Review);

Review.belongsTo(User);
User.hasMany(Review);

Rating.belongsTo(User);
User.hasMany(Rating);

Rating.belongsTo(Product);
Product.hasMany(Rating);

Review.belongsTo(Rating);
Rating.hasOne(Review);

OAuth.belongsTo(User);
User.hasOne(OAuth);

module.exports = {User, Product, Order};
