const express = require('express');
const postsController = require('../controllers/postsController');
const authController = require('../controllers/authController');
const router = express.Router();

router.post(
  '/',
  postsController.createPost,
  (req, res) => {
    console.log('you created a post');
    res.status(200).json(res.locals.newPost);
  },
);

router.get(
  '/',
  authController.verifyUser,
  postsController.getAllPosts,
  (req, res) => {
    res.status(200).json(res.locals.allPosts);
  },
);
module.exports = router;
