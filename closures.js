//----------------------------------------- CLOSURES --------------------------------------------
// This function uses a closure to maintain private state (the total)
function createCart() {
    let total = 0;  // `total` is a private variable only accessible inside this function
  
    // We return an object that contains two methods (functions)
    // Because these methods (functions) use total after createCart has finished executing a closure is created over 'total' (its saved so that "addItem" and "getTotal" can still access it)
    return {
      // This method adds the price of an item to the total
      addItem(price) {
        total += price; // We update the private `total` variable
        console.log(`Item added. Total: $${total}`); // Log the updated total
      },
      // This method simply logs the current total
      getTotal() {
        console.log(`Current total: $${total}`); // Access the same private `total` variable
      }
    };
  }
  
  // We call createCart, which returns an object with access to the private `total`
  // That object is stored in the `cart` constant
  const cart = createCart();
  
  // These method calls use the closure to update and access the private `total` state
  cart.addItem(10);  // Item added. Total: $10
  cart.addItem(5);   // Item added. Total: $15
  cart.getTotal();   // Current total: $15








//-------------------------------------------- EXAMPLE OF CLOSURES IN REACT ------------------------------------------------------
import React, { useState } from 'react';

function Counter() {
  // useState hook to manage the count state
  const [count, setCount] = useState(0);

  // Closure within the event handler
  // This function forms a closure over the 'count' variable
  const increment = () => {
    // We use the functional form of setCount to ensure we work with the latest value
    setCount(prevCount => prevCount + 1);

    // This log will often show the old value of count because it's using the value
    // from the closure, not the updated one after re-render
    console.log(`Current count: ${count}`);
  };

  return (
    <div>
      {/* Display the current count */}
      <p>Count: {count}</p>

      {/* When the button is clicked, it triggers the increment function */}
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
