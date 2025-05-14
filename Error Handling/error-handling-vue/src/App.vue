
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
