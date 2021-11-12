const axios = require("axios");

const APIHandler = (() => {
  return axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    withCredentials: true,
  });
})();

module.exports = APIHandler;