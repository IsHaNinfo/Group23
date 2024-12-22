const axios = require('axios');

const axiosClient = axios.create({
  baseURL: process.env.BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

module.exports = axiosClient;
