const db = require('../models/socialModels');

const postsController = {};

postsController.getAllPosts = (req, res, next) => {
  const query = `
    SELECT * FROM posts
    ORDER BY _id DESC`;
  db.query(query).then((data) => {
    //console.log(data.rows.votes);
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

postsController.upvotePost = (req, res, next) => {
  const { votes, postId, userId } = req.body;

  const query = {
    text: 'UPDATE posts SET votes = $1 WHERE _id = $2 RETURNING * ',
    values: [votes, postId],
  };

  db.query(query).then((data) => {
    console.log('ROWWWWWS: ', data.rows);
    res.locals.increase = true;
    return next();
  });

};

postsController.downvotePost = (req, res, next) => {
  const { votes, postId, userId } = req.body;

  const query = {
    text: 'UPDATE posts SET votes = $1 WHERE _id = $2 RETURNING * ',
    values: [votes, postId],
  };
  
  db.query(query).then((data) => {
    console.log('ROWWWWWS: ', data.rows);
    res.locals.increase = false;
    return next();
  });

};

postsController.userVotes = (req, res, next) => {}
/*
  const { votes, postId, userId } = req.body;
  console.log(votes, postId, userId);

  let num;
  if (res.locals.increase === true) num = 1;
  else num = -1;
  const query = `
        INSERT INTO posts(votes, _id)
        VALUES($1 $2)
        RETURNING *`;

  db.query(query, [votes, postId]).then((data) => {
    console.log('ROWWWWWS: ', data.rows);
    res.locals.votes = data.rows;
    return next();
  });

  
  
};
*/

/*
const reqBody = {
  votes: votes + 1,
  postId: postId,
  userId: userId
}
*/

module.exports = postsController;
