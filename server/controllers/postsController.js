const db = require('../models/socialModels');

const postsController = {};

postsController.getAllPosts = (req, res, next) => {
  const query = `
    SELECT * FROM posts
    ORDER BY _id DESC`;
  db.query(query).then((data) => {
    res.locals.allPosts = data.rows;
    return next();
  });
};

postsController.createPost = (req, res, next) => {
  const { user_id, title, body } = req.body;

  const query = `
        INSERT INTO posts(user_id, title, body)
        VALUES($1, $2, $3)
        RETURNING *`;

  db.query(query, [user_id, title, body]).then((data) => {
    res.locals.newPost = data.rows[0];
    return next();
  });
};

module.exports = postsController;
