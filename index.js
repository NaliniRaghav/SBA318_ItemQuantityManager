import express from 'express';
import itemRoutes from './routes/itemRoutes.js';
import supplierRoutes from './routes/supplierRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import methodOverride from 'method-override';

// Create the Express application
const app = express();

// Middleware to handle method overrides
app.use(methodOverride('_method'));

// Middleware to parse request bodies
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data

// Set the view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Serve static files (CSS)
app.use(express.static('public'));

// Home route (serving index.pug)
app.get('/', (req, res) => {
  try {
    res.render('index');
  } catch (error) {
    res.status(500).render('error', { message: 'An error occurred while loading the home page.' });
  }
});

// Routes for items, categories, and suppliers
app.use('/items', itemRoutes);
app.use('/suppliers', supplierRoutes);
app.use('/categories', categoryRoutes);

// 404 Not Found Middleware
app.use((req, res, next) => {
  res.status(404).render('404', { message: 'Page Not Found' });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging purposes
  res.status(500).render('error', { message: 'Something went wrong, please try again later.' });
});

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
