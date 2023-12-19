import axios from 'axios';

const host = window.location.hostname === 'localhost' ? process.env.NEXT_PUBLIC_VITE_BASE_URL : 'api';

const client = axios.create({
  baseURL: host,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;