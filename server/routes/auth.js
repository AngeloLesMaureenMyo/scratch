const express = require('express');

const authController = require('../controllers/authController');

const router = express.Router();

router.post(
  '/signup',
  authController.create,
  authController.addJWT,
  (req, res) => {
    res.status(200).json(res.locals.user); // eventually send res.locals.user
  }
);

router.post(
  '/login',
  authController.login,
  authController.addJWT,
  (req, res) => {
    res.status(200).json(res.locals.user); // eventually send res.locals.user
  }
);

module.exports = router;
