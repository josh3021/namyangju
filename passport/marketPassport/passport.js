const local_login = require('./local_passport/local_login');
const local_signup = require('./local_passport/local_signup');

module.exports = (app, passport) => {
  console.log('configPassport 호출됨');

  passport.serializeUser((user, done) => {
    console.log('serializeUser 호출됨');

    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    console.log('deserializeUser 호출됨');

    done(null, user);
  });

  passport.use('market-login', local_login);
  passport.use('market-signup', local_signup);
};