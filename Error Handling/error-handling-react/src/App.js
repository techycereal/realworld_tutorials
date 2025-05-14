import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
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

export default App;
