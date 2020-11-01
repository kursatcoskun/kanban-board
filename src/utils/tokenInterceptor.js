import axios from "axios";
// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
        console.log(config);
      config.headers["Authorization"] = "Bearer " + token;
    }
    //config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error).then((r) => console.log(r));
  }
);
