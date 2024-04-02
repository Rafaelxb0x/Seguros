import { boot } from "quasar/wrappers";
import axios from "axios";
import { LocalStorage } from "quasar";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const development = 0;
const production = 0;
const baseURL = development
  ? process.env.API_URL_DEV
  : production
  ? process.env.API_URL_PROD
  : process.env.API_URL;

console.log("🚀 ~ baseURL:", baseURL);

const api = axios.create({
  baseURL: baseURL,
});
api.interceptors.request.use(
  async (config) => {
    let token = LocalStorage.getItem("access_token");
    config.headers = {
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
const file_url = development
  ? process.env.FILE_URL_DEV
  : production
  ? process.env.FILE_URL_PROD
  : process.env.FILE_URL;

const vue_url = development
  ? "https://dev.starquiniela.com"
  : production
  ? "https://starquiniela.com"
  : "http://localhost:8000";

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
  app.config.globalProperties.$file_url = file_url;
});

export { api, file_url, vue_url };
