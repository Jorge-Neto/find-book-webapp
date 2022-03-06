import axios from 'axios';

const api = axios.create({
  // Defina URL da sua API aqui
  baseURL: 'https://localhost:5000',
  headers: { 'Content-Type': 'application/json' },
});

export default api;
