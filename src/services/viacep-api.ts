import axios from "axios";

const viaCepApi = axios.create({
  baseURL:  "http://viacep.com.br",
});

export default viaCepApi;
