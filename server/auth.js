const app = require('APP');
const {env} = app;
const debug = require('debug')(`${app.name}:auth`);
const passport = require('passport');

const User = require('APP/db/models/user');
const OAuth = require('APP/db/models/oauth');
const auth = require('express').Router();
const _ = require('lodash');
app.rootUrl = 'http://127.0.0.1:1337';


/*************************
 * Auth strategies
 *
 * The OAuth model knows how to configure Passport middleware.
 * To enable an auth strategy, ensure that the appropriate
 * environment variables are set.
 *
 * You can do it on the command line:
 *
 *   FACEBOOK_CLIENT_ID=abcd FACEBOOK_CLIENT_SECRET=1234 npm start
 *
 * Or, better, you can create a ~/.$your_app_name.env.json file in
 * your home directory, and set them in there:
 *
 * {
 *   FACEBOOK_CLIENT_ID: 'abcd',
 *   FACEBOOK_CLIENT_SECRET: '1234',
 * }
 *
 * Concentrating your secrets this way will make it less likely that you
 * accidentally push them to Github, for example.
 *
 * When you deploy to production, you'll need to set up these environment
 * variables with your hosting provider.
 **/

// Facebook needs the FACEBOOK_CLIENT_ID and FACEBOOK_CLIENT_SECRET
// environment variables.
OAuth.setupStrategy({
  provider: 'facebook',
  strategy: require('passport-facebook').Strategy,
  config: {
    clientID: env.FACEBOOK_CLIENT_ID,
    clientSecret: env.FACEBOOK_CLIENT_SECRET,
    callbackURL: `${app.rootUrl}/api/auth/login/facebook`
  },
  passport
});

// Google needs the GOOGLE_CONSUMER_SECRET AND GOOGLE_CONSUMER_KEY
// environment variables.
OAuth.setupStrategy({
  provider: 'google',
  strategy: require('passport-google-oauth').OAuth2Strategy,
  config: {
    clientID: env.GOOGLE_CONSUMER_KEY,
    clientSecret: env.GOOGLE_CONSUMER_SECRET,
    callbackURL: `${app.rootUrl}/api/auth/google/login`
  },
  passport
});

// Github needs the GITHUB_CLIENT_ID AND GITHUB_CLIENT_SECRET
// environment variables.
OAuth.setupStrategy({
  provider: 'github',
  strategy: require('passport-github2').Strategy,
  config: {
    clientID: env.GITHUB_CLIENT_ID,
    clientSecrets: env.GITHUB_CLIENT_SECRET,
    callbackURL: `${app.rootUrl}/api/auth/login/github`
  },
  passport
});

// Other passport configuration:

passport.serializeUser((user, done) => {
  debug('will serialize user.id=%d', user.id);
  done(null, user.id);
  debug('did serialize user.id=%d', user.id);
});

passport.deserializeUser(
  (id, done) => {
    debug('will deserialize user.id=%d', id);
    User.findById(id)
      .then(user => {
        debug('deserialize did ok user.id=%d', user.id);
        done(null, user);
      })
      .catch(err => {
        debug('deserialize did fail err=%s', err);
        done(err);
      });
  }
);

passport.use(new (require('passport-local').Strategy)(
  (email, password, done) => {
    console.log('local strategy hit!');
    debug('will authenticate user(email: "%s")', email);
    User.findOne({where: {email}})
      .then(user => {
        if (!user) {
          debug('authenticate user(email: "%s") did fail: no such user', email);
          return done(null, false, { message: 'Login incorrect' });
        }
        return user.authenticate(password)
          .then(ok => {
            if (!ok) {
              debug('authenticate user(email: "%s") did fail: bad password');
              return done(null, false, { message: 'Login incorrect' });
            }
            debug('authenticate user(email: "%s") did ok: user.id=%d', user.id);
            done(null, user);
          });
      })
      .catch(done);
  }
));

auth.get('/whoami', (req, res) => {
  console.log(req.user);
  res.send(_.pick(req.user, ['firstName', 'lastName', 'email', 'id']));
});

auth.post('/local/signup', (req, res, next) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.username,
    password: req.body.password
  })
  .then(user => {
    req.login(user, (err) => {
      if (err) next(err);
      else res.sendStatus(201);
    });
  })
  .catch(next);
});

auth.get('/:strategy', (req, res, next) => {
  passport.authenticate(req.params.strategy, { scope: 'email' })(req, res, next);
});

auth.get('/:strategy/login', (req, res, next) =>
  passport.authenticate(req.params.strategy, {
    successRedirect: '/'
  })(req, res, next)
);

auth.post('/:strategy/login', (req, res, next) => {
  console.log('route hit!');
  passport.authenticate(req.params.strategy, {
    successRedirect: '/'
  })(req, res, next);
}
);

auth.post('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/api/auth/whoami');
});

module.exports = auth;
