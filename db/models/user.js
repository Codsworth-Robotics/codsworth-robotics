'use strict';

const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const db = require('APP/db');

const User = db.define('users', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  admin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  // We support oauth, so users may or may not have passwords.
  password_digest: Sequelize.STRING,
  password: Sequelize.VIRTUAL
}, {
  indexes: [{fields: ['email'], unique: true}],
  hooks: {
    beforeCreate: setEmailAndPassword,
    beforeUpdate: setEmailAndPassword
  },
  instanceMethods: {
    authenticate (plaintext) {
      return new Promise((resolve, reject) =>
        bcrypt.compare(plaintext, this.password_digest,
          (err, result) =>
            err ? reject(err) : resolve(result))
        );
    }
  },
  getterMethods: {
    // For product reviews
    displayName: function () {
      return `${this.firstName} ${this.lastName[0]}.`;
    }
  },
  setterMethods: {
    name: function (fullname) {
      const nameArr = fullname.split(' ');
      this.setDataValue('firstName', nameArr[0]);
      this.setDataValue('lastName', nameArr[1]);
    }
  }
});

function setEmailAndPassword (user) {
  user.email = user.email && user.email.toLowerCase();
  if (!user.password) return Promise.resolve(user);

  return new Promise((resolve, reject) =>
    bcrypt.hash(user.get('password'), 10, (err, hash) => {
      if (err) reject(err);
      user.set('password_digest', hash);
      resolve(user);
    })
  );
}

module.exports = User;
