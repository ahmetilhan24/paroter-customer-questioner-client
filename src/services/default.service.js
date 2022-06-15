import axios from "axios";
export const clientHTTP = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 10000,
  headers: {},
});
