const express = require('express');

const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const router = express.Router();

router.post(
  '/signup',
  authController.create,
  authController.addJWT,
  userController.createAlias,
  (req, res) => {
    res.status(200).json(res.locals.user);
  }
);

router.post(
  '/login',
  authController.login,
  authController.addJWT,
  userController.createAlias,
  (req, res) => {
    res.status(200).json(res.locals.user);
  }
);

router.get('/logout', authController.logout, (req, res) => {
  res.redirect('/');
});

router.get('/check', authController.verifyUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

module.exports = router;
