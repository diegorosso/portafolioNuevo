<template>
    <div class="test-container">
      <h2>Componente de Prueba</h2>
      <p>Contador: {{ count }}</p>
      <button @click="count++">Incrementar</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const count = ref(0)
  </script>
  
  <style scoped>
  .test-container {
    padding: 1rem;
    border: 2px solid #ccc;
    border-radius: 8px;
    max-width: 300px;
    margin: 2rem auto;
    text-align: center;
    background-color: #f9f9f9;
  }
  
  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #42b883;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #2c9d6c;
  }
  </style>
  