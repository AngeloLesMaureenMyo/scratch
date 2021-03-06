const express = require('express');

const authController = require('../controllers/authController');

const router = express.Router();

router.post(
  '/create',
  authController.create,
  authController.addJWT,
  (req, res) => {
    res.status(200).json('user created!'); // eventually send res.locals.user
  }
);

router.post(
  '/login',
  authController.login,
  authController.addJWT,
  (req, res) => {
    res.status(200).json('you are logged in!'); // eventually send res.locals.user
  }
);

module.exports = router;
