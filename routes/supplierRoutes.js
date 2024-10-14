

import express from 'express';
import { suppliers } from '../data/suppliers.js';

const router = express.Router();

// GET: Display all suppliers (as HTML in browser or JSON in Postman)
router.get('/', (req, res) => {
  if (req.headers['accept'] === 'application/json') {
    return res.status(200).json(suppliers);  // JSON for Postman
  }
  res.render('suppliers', { suppliers });  // HTML for browser
});

export default router;
