const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwtSecret = 'super-secret-secret';

const authController = {};

const db = {
  username: 'angelo',
  password: '$2b$10$MNntgeRRJo02PJUQDWMS8O7q5YhwZjYy0VZL0TpR9wPcWWUg3jio2',
};

authController.create = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next({
      log: 'Error in authController.create',
      status: 401,
      message: 'Missing username or password in request body',
    });
  }

  bcrypt.hash(password, saltRounds).then((hash) => {
    console.log(hash);

    //SAVE TO DB
    // GET USER ENTRY BACK FROM DB, store in res.locals??
    return next();
  });
};

authController.login = (req, res, next) => {
  const { username, password } = req.body;

  // READ USER FROM DB
  // If user not found, send error in response

  // Compare plaintext pass to hash from DB
  bcrypt.compare(password, db.password).then((result) => {
    if (result) return next();

    return next({
      log: 'error authController.login',
      status: 401,
      message: 'invalid username/password combination',
    });
  });
};

authController.verifyUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    // USER IS NOT LOGGED IN, REDIRECT TO SIGN IN
    return next({
      log: 'error in authController.verifyUser',
      status: 403,
      message: 'missing jwt',
    });
  }

  // Verify Token
  jwt.verify(token, jwtSecret, (err, decoded) => {
    console.log(decoded);
    if (!decoded)
      return next({
        log: 'error verifying jwt token',
        status: 403,
        message: 'invalid jwt',
      });

    return next();
  });
};

authController.addJWT = (req, res, next) => {
  const { username } = req.body;
  jwt.sign(
    { username },
    jwtSecret,
    {
      expiresIn: '1h',
    },
    (err, token) => {
      if (err) {
        return res.status(400).json('error creating jwt');
      }
      // Store jwt in res.cookies
      res.cookie('jwt', token, { httpOnly: true });
      return next();
    }
  );
};

module.exports = authController;
