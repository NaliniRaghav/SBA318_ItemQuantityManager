
import express from 'express';
import itemRoutes from './routes/itemRoutes.js';
import supplierRoutes from './routes/supplierRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';

const app = express();

// Middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set the view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Serve static files (CSS)
app.use(express.static('public'));

// Home route (serving index.pug)
app.get('/', (req, res) => {
  res.render('index');
});

// Routes for items, categories, and suppliers
app.use('/items', itemRoutes);
app.use('/suppliers', supplierRoutes);
app.use('/categories', categoryRoutes);

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
