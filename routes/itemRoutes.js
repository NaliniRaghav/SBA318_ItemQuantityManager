
import express from 'express';
import { items } from '../data/items.js';  // Import item data (make sure items.js exports an array of items)

const router = express.Router();

// GET: Display all items (HTML in browser or JSON in Postman)
router.get('/', (req, res) => {
  if (req.headers['accept'] === 'application/json') {
    return res.status(200).json(items);  // Return JSON for Postman requests
  }
  res.render('items', { items });  // Render HTML for browser requests
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

  if (!name || !quantity || !category || !supplier) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newItem = {
    id: items.length + 1,
    name: name.trim(),
    quantity: parseInt(quantity),
    category: parseInt(category),
    supplier: parseInt(supplier)
  };

  items.push(newItem);  // Add the new item to the list

  // Check if the request expects a JSON response (Postman)
  if (req.headers['accept'] === 'application/json') {
    return res.status(201).json({ message: 'Item added successfully', item: newItem });
  }

  // If not JSON, redirect to the items page (for browser use)
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

  // Update the item
  items[itemIndex] = {
    id: parseInt(id),
    name: name.trim(),
    quantity: parseInt(quantity),
    category: parseInt(category),
    supplier: parseInt(supplier)
  };

  // Check if the request expects a JSON response (Postman)
  if (req.headers['accept'] === 'application/json') {
    return res.status(200).json({ message: 'Item updated successfully', item: items[itemIndex] });
  }

  // If not JSON, redirect to the items page (for browser use)
  res.redirect('/items');
});

// POST: Delete an item
router.post('/delete/:id', (req, res) => {
  const { id } = req.params;
  const itemIndex = items.findIndex(item => item.id === parseInt(id));
  
  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  items.splice(itemIndex, 1);  // Remove the item from the list

  // Check if the request expects a JSON response (Postman)
  if (req.headers['accept'] === 'application/json') {
    return res.status(200).json({ message: 'Item deleted successfully' });
  }

  // If not JSON, redirect to the items page (for browser use)
  res.redirect('/items');
});

export default router;
