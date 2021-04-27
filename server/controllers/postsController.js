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
  const { user_id, title, body, username } = req.body;

  const query = `
        INSERT INTO posts(user_id, title, body, username)
        VALUES($1, $2, $3, $4)
        RETURNING *`;

  db.query(query, [user_id, title, body, username]).then((data) => {
    res.locals.newPost = data.rows[0];
    return next();
  });
};

postsController.upvotePost = (req, res, next) => {
  const { votes, postId, userId } = req.body;
  // console.log('STACY testing12345')
  const query = {
    text: 'UPDATE posts SET votes = $1 WHERE _id = $2 RETURNING * ',
    values: [votes, postId],
  };

  db.query(query).then((data) => {
    // console.log('ROWWWWWS: ', data.rows);
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
    // console.log('ROWWWWWS: ', data.rows);
    res.locals.increase = false;
    return next();
  });
};

postsController.userVotes = (req, res, next) => {
  const { votes, userId } = req.body;

  const query = {
    text: 'SELECT votes FROM users WHERE _id = $1',
    values: [userId],
  };
  db.query(query)
    .then((data) => {
      res.locals.currentVotes = data.rows[0].votes;
      return next();
    })
    .catch((err) => {
      return next({
        message: 'error getting votes from user in uservotes middleware',
        error: err,
      });
    });
};

postsController.updateUserVotes = (req, res, next) => {
  const { votes, userId } = req.body;
  // console.log('currentVotes==========================', res.locals.currentVotes)
  if (res.locals.increase === true) {
    res.locals.currentVotes += 1;
  } else {
    res.locals.currentVotes -= 1;
  }

  const queryToUpdateVotes = {
    text: 'UPDATE users SET votes = $1 WHERE _id = $2 RETURNING *',
    values: [res.locals.currentVotes, userId],
  };
  db.query(queryToUpdateVotes)
    .then((data) => {
      res.locals.updatedUser = data.rows[0];
      // console.log('querytoupdateuser==========================', data.rows[0])
      return next();
    })
    .catch((err) => {
      return next({
        message: 'error updating the votes for user',
        error: err,
      });
    });
};
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

postsController.bannedUser = (req, res, next) => {
  const { username, user_id } = req.body;
  console.log('type ', typeof user_id);

  const queryToRemoveUser = {
    text: `DELETE FROM users WHERE _id = $1`,
    values: [user_id],
  };

  db.query(queryToRemoveUser)
    .then((data) => {
      console.log('inside query respo0000se==========');
      // res.locals.updatedUser = data.rows[0]
      // console.log('querytoupdateuser==========================', data.rows[0])
      return next();
    })
    .catch((err) => {
      return next({
        message: 'error banning the user',
        error: err,
      });
    });
};

module.exports = postsController;
