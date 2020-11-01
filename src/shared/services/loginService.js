import axios from "axios";

export const LoginService = {
  login({ username, password }) {
    return axios.post("http://localhost:8000/api/token",{username,password}).then((res) => res.data);
  },
};
