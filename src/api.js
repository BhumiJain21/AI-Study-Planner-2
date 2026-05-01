import axios from "axios";

const API = axios.create({
  baseURL: "/.netlify/functions"
});

export default API;