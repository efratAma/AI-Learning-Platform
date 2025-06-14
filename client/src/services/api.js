import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'// או לפי מה שהשרת רץ
});

export default api;
