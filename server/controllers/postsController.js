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
  console.log('votes:', votes, 'postId:', postId, 'userId:', userId);

  // const query = `
  //       UPDATE posts
  //       SET votes = 
  //       WHERE _id = 
  //       RETURNING *`;

  const query = {
    // name: 'nipple',
    text: 'UPDATE posts SET votes = $1 WHERE _id = $2 RETURNING * ',
    values: [votes, postId],
  };

  // id: data.rows[0]._id,

  // db.query(query, [votes, postId]).then((data) => {
    db.query(query).then((data) => {
    console.log('ROWWWWWS: ', data.rows);
    // res.locals.votes = data.rows;
    res.locals.increase = true;
    // return next();
  });

  db.query('SELECT * FROM posts').then((data) => {
    // console.log('ROWWWWWS:=================================== ', data.rows);
    res.locals.votes = data.rows;
    res.locals.increase = true;
    return next();
  });
  // .catch(err => console.log('upvote error', err));
};

postsController.downvotePost = (req, res, next) => {
  const { votes, postId, userId } = req.body;
  console.log(votes, postId, userId);

  const query = `
        INSERT INTO posts(votes, _id)
        VALUES($1 $2)
        RETURNING posts`;

  db.query(query, [votes, postId]).then((data) => {
    console.log('ROWWWWWS: ', data.rows);
    res.locals.votes = data.rows;
    res.locals.increase = false;
    return next();
  });
};

postsController.userVotes = (req, res, next) => {
  console.log('userVotes');
  // let num;
  // if (res.locals.increase === true) num = 1;
  // else num = -1;

  // const { votes, postId, userId } = req.body;
  // console.log(votes, postId, userId);

  // const query = `
  //       INSERT INTO posts(votes, _id)
  //       VALUES($1 $2)
  //       RETURNING *`;

  // db.query(query, [votes, postId]).then((data) => {
  //   console.log('ROWWWWWS: ', data.rows);
  //   res.locals.votes = data.rows;
  //   return next();
  // });
};

/*
const reqBody = {
  votes: votes + 1,
  postId: postId,
  userId: userId
}
*/

module.exports = postsController;
