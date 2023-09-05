// First we need to import axios.js
import axios from "axios";
// Next we make an 'instance' of it
const api = axios.create({
  // .. where we make our configurations
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
  headers: {
    "Content-Type": "Application/json",
  },
});

export default api;
