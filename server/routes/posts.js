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
  postsController.getFeedPosts,
  (req, res) => {
    res.status(200).json(res.locals.feedPosts);
  }
);
/*  Gets all child posts to fill thread container when ---> onClick of button on post component  */
router.get('/threads',
  authController.verifyUser, 
  postsController.getThreadPosts, 
  (req, res) => {
    console.log('getting thread posts');
    res.status(200).json(res.locals.threadPosts);
  }
);
/* ******************************************** */
/*  All routers below will be for posts karma  */
router.post('/karma',
  authController.verifyUser, 
  postsController.updatePostKarma,
  (req, res) => {
    console.log('You voted on a post')
    res.status(200).json(res.locals.newKarma)
  }
);

module.exports = router;
