const db = require('../models/socialModels');

const postsController = {};

postsController.getAllPosts = async (req, res, next) => {
  try{
  const query = `
    SELECT * FROM posts p
    WHERE p.parent_id = 0`;
  await db.query(query, (err,data) => {
    res.locals.allPosts = data.rows;
    return next()
  });
}catch(err){
  return next({
  log: 'error at postController.getAllPosts',
  status: 401,
  message: 'failed to retrieve posts',
})};
};
/*  Called in routes/posts.js on router.get('/thread-posts',...)
       -->Gets all child comments on a post  */
postsController.getThreadPosts = async (req, res, next) => {
  try{
  const query = `
  SELECT * FROM posts p
  WHERE p.parent_id = ${req.body.postId}`;
 await db.query(query, (err, data) => {
    res.locals.threadPosts = data.rows;
    return next();
  });
}catch(err){
  return next({
  log: 'error at postController.getThreadPosts' ,
  status: 401,
  message: 'failed to retrieve thread posts',
})};
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
