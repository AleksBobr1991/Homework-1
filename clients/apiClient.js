const axios = require('axios');

const apiClient = axios.create({
    baseURL: "https://fakerestapi.azurewebsites.net/api/v1",
    timeout: 5000
});

module.exports = apiClient;
