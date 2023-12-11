const express = require('express');
const app = express();

// Routes
const authRoutes = require('./routes/auth');
const directoryRoutes = require('./routes/directory');
const auditRoutes = require('./routes/audit');

// Middleware
app.use(express.json());

// Mount routes
app.use('/auth', authRoutes);
app.use('/directory', directoryRoutes);
app.use('/audit', auditRoutes);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
