const express = require('express');

const authController = require('../controllers/authController');

const router = express.Router();

router.post('/create', authController.create, (req, res) => {
  res.status(200).json('user created!');
});

router.post('/login', authController.login, (req, res) => {
  res.status(200).json('you are logged in!');
});

module.exports = router;
