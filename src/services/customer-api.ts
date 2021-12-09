import axios from "axios";

const customerAPI = axios.create({
  baseURL:  "https://bemol-connection-heroku.herokuapp.com",
});

export default customerAPI;
