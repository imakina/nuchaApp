const Product = require('../models').Product;

module.exports = {
  create(req, res) {
    return Product
      .create({
        description: req.body.description,
        code: req.body.code,
        price: req.body.price
      })
      .then(product => res.status(201).send(product))
      .catch(error => res.status(400).send(error));
  },
};