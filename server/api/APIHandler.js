const axios = require("axios");

const APIHandler = (() => {
  return axios.create({
    baseURL: process.env.BACKEND_URL,
    //withCredentials: true,
  });
})();

module.exports = APIHandler;