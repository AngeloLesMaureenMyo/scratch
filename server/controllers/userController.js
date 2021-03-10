const { adverbs, adjectives, animals } = require('../utils/aliasWords');
const userController = {};

userController.createAlias = (req, res, next) => {
  const randIndex = (arrayLength) => {
    return Math.floor(Math.random() * arrayLength);
  };

  const adverb = adverbs[randIndex(adverbs.length)];
  const adjective = adjectives[randIndex(adjectives.length)];
  const animal = animals[randIndex(animals.length)];

  res.locals.alias = `${adverb} ${adjective} ${animal}`;
  return next();
};
