
import express from 'express';
import { categories } from '../data/categories.js';

const router = express.Router();

// GET: Display all categories (as HTML in browser or JSON in Postman)
router.get('/', (req, res) => {
  if (req.headers['accept'] === 'application/json') {
    return res.status(200).json(categories);  // JSON for Postman
  }
  res.render('categories', { categories });  // HTML for browser
});

export default router;
