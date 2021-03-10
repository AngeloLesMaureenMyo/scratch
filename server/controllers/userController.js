const db = require('../models/socialModels');
const userController = {};

userController.createAlias = (req, res, next) => {
  const getRandWordFrom = (table) => {
    return `SELECT word FROM ${table} ORDER BY RANDOM() LIMIT 1`;
  };

  const adverb = getRandWordFrom('adverbs');
  const adjective = getRandWordFrom('adjectives');
  const animal = getRandWordFrom('animals');

  Promise.all([db.query(adverb), db.query(adjective), db.query(animal)])
    .then((data) => {
      const words = data.map((record) => record.rows[0].word);
      res.locals.alias = `${words[0]} ${words[1]} ${words[2]}`;
      console.log(res.locals.alias);
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
