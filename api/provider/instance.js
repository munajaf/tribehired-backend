const axios = require('axios');

const { baseUrl } = require("./endpoint");

exports.Instance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});
