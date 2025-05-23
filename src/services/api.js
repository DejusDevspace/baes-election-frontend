import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BAES_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to attach the auth token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor to handle 401 errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Automatically logout on unauthorized responses
      localStorage.removeItem("token");
      // I'll consider a redirect to login page here
      // or use a custom event to notify AuthContext
    }
    return Promise.reject(error);
  }
);

export default api;
