const Combo = require('../models').Combo;

module.exports = {
  create(req, res) {
    return Combo
      .create({
        title: req.body.title,
      })
      .then(combo => res.status(201).send(combo))
      .catch(error => res.status(400).send(error));
  },
};