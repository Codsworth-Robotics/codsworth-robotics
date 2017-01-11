'use strict';

const db = require('APP/db');
const User = require('APP/db/models/user');
const {expect} = require('chai');

describe('User', () => {
  before('wait for the db', () => db.didSync);

  let creatingUser;
  beforeEach(() => {
    creatingUser = User.build({
      firstName: 'John',
      lastName: 'Smith',
      email: 'jsmith@gmail.com',
      password: 'ok'
    });
  });

  afterEach(() => {
    return User.truncate({cascade: true});
  });

  describe('attributes definition', () => {
    it('requires `first name`', () => {
      creatingUser.firstName = null;
      return creatingUser.validate()
        .then(user => {
          expect(user).to.be.an.instanceOf(Error);
          expect(user.message).to.contain('firstName cannot be null');
        });
    });

    it('requires `last name`', () => {
      creatingUser.lastName = null;
      return creatingUser.validate()
        .then(user => {
          expect(user).to.be.an.instanceOf(Error);
          expect(user.message).to.contain('lastName cannot be null');
        });
    });

    describe('for email', () => {
      it('requires a valid `email`', () => {
        creatingUser.email = 'jsmith.com';
        return creatingUser.validate()
          .then(user => {
            expect(user).to.be.an.instanceOf(Error);
            expect(user.message).to.contain('Validation isEmail failed');
          });
      });

      it('requires email to be unique', () => {
        return creatingUser.save()
        .then(() => {
          return User.create({
            firstName: 'Jonathan',
            lastName: 'Smith',
            email: 'jsmith@gmail.com'
          });
        })
        .catch(error => {
          expect(error.message).to.contain('Validation error');
        });
      });
    });

    it('automatically sets `admin` status to false', () => {
      return creatingUser.save()
        .then(user => {
          expect(user.admin).to.be.false;
        });
    });
  });

  describe('options definition', () => {
    it('creates a display name with first name and last initial', () => {
      expect(creatingUser.displayName).to.equal('John S.');
    });
  });

  describe('authenticate(plaintext: String) ~> Boolean', () => {
    it('resolves true if the password matches', () => {
      return creatingUser.save()
        .then(user => user.authenticate('ok'))
        .then(result => expect(result).to.be.true);
    });

    it("resolves false if the password doesn't match", () => {
      return creatingUser.save()
        .then(user => user.authenticate('not ok'))
        .then(result => expect(result).to.be.false);
    });
  });
});
