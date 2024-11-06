import axios, { AxiosError } from "axios";
export const BASE_URL = import.meta.env.VITE_BACKEND_URL;
console.log("🚀 ~ file: index.tsx:3 ~ BASE_URL:", BASE_URL);

export const CLIENT_API = axios.create({
  baseURL: BASE_URL,
  withCredentials:true
});
