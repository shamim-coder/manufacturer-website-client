const axios = require("axios");

const fetcher = axios.create({
    baseURL: "http://localhost:5000",
});

export default fetcher;
