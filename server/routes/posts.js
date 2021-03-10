const express = require('express');
const postsController = require('../controllers/postsController');
const authController = require('../controllers/authController');
const router = express.Router();

router.post(
  '/upvote', 
  postsController.upvotePost,
  postsController.getAllPosts,
  // postsController.userVotes,
  (req, res) => {
    console.log('you changed the vote count');
    return res.status(200).json(res.locals.allPosts);
  },
);

router.post(
  '/downvote',
  postsController.downvotePost,
  postsController.getAllPosts,
  // postsController.userVotes,
  (req, res) => {
    console.log('you changed the vote count');
    return res.status(200).json(res.locals.allPosts);
  },
);

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
