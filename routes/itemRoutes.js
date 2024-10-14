
import express from 'express';
import { items } from '../data/items.js';  // Item data

const router = express.Router();

// GET: Display all items (as HTML in browser or JSON in Postman)
router.get('/', (req, res) => {
  if (req.headers['accept'] === 'application/json') {
    return res.status(200).json(items);  // JSON for Postman
  }
  res.render('items', { items });  // HTML for browser
});

// GET: Render the form to add a new item
router.get('/new', (req, res) => {
  res.render('form', { item: {}, action: '/items', method: 'POST' });
});

// GET: Render the form to update an existing item
router.get('/edit/:id', (req, res) => {
  const { id } = req.params;
  const item = items.find(item => item.id === parseInt(id));

  if (!item) {
    return res.status(404).send('Item not found');
  }

  res.render('form', { item, action: `/items/${id}`, method: 'POST' });
});

// POST: Add a new item
router.post('/', (req, res) => {
  const { name, quantity, category, supplier } = req.body;
  const newItem = {
    id: items.length + 1,
    name: name.trim(),
    quantity: parseInt(quantity),
    category: parseInt(category),
    supplier: parseInt(supplier)
  };

  items.push(newItem);

  if (req.headers['accept'] === 'application/json') {
    return res.status(201).json({ message: 'Item added successfully', item: newItem });
  }

  res.redirect('/items');
});

// POST: Update an existing item
router.post('/:id', (req, res) => {
  const { id } = req.params;
  const { name, quantity, category, supplier } = req.body;

  const itemIndex = items.findIndex(item => item.id === parseInt(id));
  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  items[itemIndex] = {
    id: parseInt(id),
    name: name.trim(),
    quantity: parseInt(quantity),
    category: parseInt(category),
    supplier: parseInt(supplier)
  };

  if (req.headers['accept'] === 'application/json') {
    return res.status(200).json({ message: 'Item updated successfully', item: items[itemIndex] });
  }

  res.redirect('/items');
});

// POST: Delete an item
router.post('/delete/:id', (req, res) => {
  const { id } = req.params;
  const itemIndex = items.findIndex(item => item.id === parseInt(id));
  
  if (itemIndex !== -1) {
    items.splice(itemIndex, 1);
  }

  if (req.headers['accept'] === 'application/json') {
    return res.status(200).json({ message: 'Item deleted successfully' });
  }

  res.redirect('/items');
});

export default router;
