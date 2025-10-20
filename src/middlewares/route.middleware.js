const { products } = require('../models/product');

const validateProduct = (req, res, next) => {
  const id = parseInt(req.params.id);
  const product = products.find((e) => e.id === +id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found',
    });
  }
  next();
};

module.exports = validateProduct;
