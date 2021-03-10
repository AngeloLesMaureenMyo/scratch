const db = require('../models/socialModels');

const postsController = {};

postsController.getAllPosts = (req, res, next) => {
  const query = `
    SELECT * FROM posts p
    WHERE p.parent_id = 0`;
  db.query(query).then((data) => {
    res.locals.allPosts = data.rows;
    return next();
  });
  return next({
    log: 'error at postController.getAllPosts',
    status: 401,
    message: 'failed to retrieve posts',
  })
};
/*  Called on line 20 of routes/posts.js
       -->Gets all child comments on a post  */
postsController.getThreadPosts = (req, res, next) => {
  const query = `
  SELECT * FROM posts p
  WHERE p.parent_id = ${req.body.postId}`;
  db.query(query).then((data) => {
    res.locals.threadPosts = data.rows;
    return next()
  })
  return next({
    log: 'error at postController.getThreadPosts' ,
    status: 401,
    message: 'failed to retrieve thread posts',
  });
};
postsController.createPost = (req, res, next) => {
  const { user_id, alias, body } = req.body;

  const query = `
        INSERT INTO posts(user_id, alias, body)
        VALUES($1, $2, $3)
        RETURNING *`;

  db.query(query, [user_id, alias, body]).then((data) => {
    res.locals.newPost = data.rows[0];
    return next();
  });
};

module.exports = postsController;
