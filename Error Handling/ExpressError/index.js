//---------------------------------- ERROR HANDLING IN EXPRESS -------------------------------------
const express = require('express');
const app = express();

// Sample API route that simulates an error
app.get('/api/data', (req, res, next) => {
  try {
    // Simulate an error (could be from a failed DB call or business logic failure)
    throw new Error('Failed to fetch data.');
  } catch (err) {
    // Pass the error to the next middleware (error handler)
    next(err);
  }
});

// Global error handling middleware
app.use((err, req, res, next) => {
  // Log the error stack trace to the console (helpful for debugging)
  console.error(err.stack);

  // Respond to the client with a 500 status and a generic error message
  res.status(500).json({ message: 'Something went wrong. Please try again later.' });
});

// Start the server on port 3000
app.listen(3000, () => console.log('Server running on port 3000'));
