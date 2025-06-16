// index.js or server.js

const express = require('express');
const cors = require('cors');
const app = express();
const products = require('./products');

app.use(cors());

app.get('/api/products', (req, res) => {
  let { search = '', category, minPrice, maxPrice, page = 1, pageSize = 5 } = req.query;

  let filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (!category || p.category === category) &&
    (!minPrice || p.price >= parseFloat(minPrice)) &&
    (!maxPrice || p.price <= parseFloat(maxPrice))
  );

  const total = filtered.length;
  const start = (page - 1) * pageSize;
  const paginated = filtered.slice(start, start + parseInt(pageSize));

  res.json({ total, products: paginated });
});

app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  res.json(product);
});

app.listen(3000, () => console.log('Server running on https://skien-assignment-2.onrender.com'));
