import axios from "axios";

const API = axios.create({
  baseURL: "https://YOUR-PROJECT.vercel.app/api/plan"
});

export default API;