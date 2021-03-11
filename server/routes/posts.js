const express = require('express');
const postsController = require('../controllers/postsController');
const authController = require('../controllers/authController');
const router = express.Router();

router.post(
  '/',
  authController.verifyUser,
  postsController.createPost,
  (req, res) => {
    console.log('you created a post');
    res.status(200).json(res.locals.newPost);
  }
);

router.get(
  '/',
  authController.verifyUser,
  postsController.getAllPosts,
  (req, res) => {
    res.status(200).json(res.locals.allPosts);
  }
);
/*  Gets all child posts to fill thread container when ---> onClick of button on post component  */
router.get('/threads', postsController.getThreadPosts, (req, res) => {
  console.log('getting thread posts');
  res.status(200).json(res.locals.threadPosts);
});

module.exports = router;
