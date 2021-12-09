import axios from "axios";

const viaCepApi = axios.create({
  baseURL:  "viacep.com.br",
});

export default viaCepApi;
