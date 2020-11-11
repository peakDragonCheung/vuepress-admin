import axios, { AxiosInstance } from "axios";
const requestIns: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL as string | undefined, // url = base url + request url
  timeout: 10000,
});


requestIns.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

requestIns.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default requestIns
