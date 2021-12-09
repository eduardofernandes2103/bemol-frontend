import axios from "axios";

const customerApi = axios.create({
  baseURL:  "https://bemol-connection-heroku.herokuapp.com",
});

export default customerApi;
