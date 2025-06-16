// /api/products.js

const products = require('../products');

export default function handler(req, res) {
  res.status(200).json(products);
}
