const db = require('../models/socialModels');

const postsController = {};

postsController.getFeedPosts = async (req, res, next) => {
  try {
    /* All posts without parents will be assigned a parent_id of 0 in the db
            --> That means to get all feedPosts
    */
    const query = `
    SELECT * FROM posts p
    WHERE p.parent_id = 0
    ORDER BY p.createdat`;
    await db.query(query, (err, data) => {
      res.locals.feedPosts = data.rows;
      return next();
    });
  } catch (err) {
    return next({
      log: 'error at postController.getAllPosts',
      status: 401,
      message: `failed to retrieve posts ${err.message}`,
    });
  }
};
/*  Called in routes/posts.js on router.get('/thread-posts',...)
       -->Gets all child comments on a post  */
postsController.getThreadPosts = async (req, res, next) => {
  try {
    const query = `
  SELECT * FROM posts p
  WHERE p.parent_id = ${req.body.postId}
  ORDER BY p.createdat DESC`;
    await db.query(query, (err, data) => {
      res.locals.threadPosts = data.rows;
      return next();
    });
  } catch (err) {
    return next({
      log: 'error at postController.getThreadPosts',
      status: 401,
      message: `failed to retrieve thread posts ${err.message}`,
    });
  }
};

postsController.createPost = (req, res, next) => {
  const { user_id, alias, body, parent_id } = req.body;

  const query = `
        INSERT INTO posts(user_id, alias, createdat, body, parent_id)
        VALUES(${user_id}, ${alias}, now(), ${body}, ${parent_id})
        RETURNING *`;

  db.query(query, [user_id, alias, createdat, body, parent_id]).then((data) => {
    res.locals.newPost = data.rows[0];
    return next();
  });
};

module.exports = postsController;
