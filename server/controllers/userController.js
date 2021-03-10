const db = require('../models/socialModels');
const userController = {};

userController.createAlias = (req, res, next) => {
  const getRandWordFrom = (table) => {
    return `SELECT word FROM ${table} ORDER BY RANDOM() LIMIT 2`;
  };

  const adjective = getRandWordFrom('adjectives');
  const noun = getRandWordFrom('nouns');

  Promise.all([db.query(adjective), db.query(noun)])
    .then((data) => {
      const rows = data.map((record) => record.rows);
      res.locals.alias = `${rows[0][0].word} ${rows[0][1].word} ${rows[1][0].word}`;
      return next();
    })
    .catch((err) => {
      return next({
        error: err,
        message: 'Error occurred in userController.createAlias',
      });
    });
};

module.exports = userController;
