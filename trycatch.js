//----------------------------------------- REACT ERROR HANDLING -----------------------------
import React, { useState } from 'react';

function ExampleComponent() {
  // React state to store any error message
  const [error, setError] = useState(null);

  // This function simulates an error and demonstrates error handling using try/catch
  const handleClick = () => {
    try {
      // Simulate an error being thrown (this could represent a failed API call or logic error)
      throw new Error('Something went wrong while processing your request.');
    } catch (err) {
      // Catch the error and update the state with the error message
      setError((err).message);
    }
  };

  return (
    <div>
      {/* Button triggers the error when clicked */}
      <button onClick={handleClick}>Trigger Error</button>

      {/* If there is an error, it will be displayed in red text */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default ExampleComponent;
















//---------------------------------------- VUE ERROR HANDLING ------------------------------------
<template>
  <div>
    <!-- Button triggers the error when clicked -->
    <button @click="handleClick">Trigger Error</button>

    <!-- If there's an error, it will be displayed in red -->
    <p v-if="error" style="color: red">{{ error }}</p>
  </div>
</template>

<script setup>
// Import Vue's reactivity system
import { ref } from 'vue';

// Declare a reactive variable to hold any error message
const error = ref(null);

// Function to simulate and handle an error
function handleClick() {
  try {
    // Simulate an error being thrown
    throw new Error('Something went wrong while processing your request.');
  } catch (err) {
    // Assign the error message to the reactive `error` variable
    error.value = err.message;
  }
}
</script>













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

