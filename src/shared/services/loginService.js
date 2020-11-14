import axios from "axios";
import { API_URL } from "../../utils/properties";
export const LoginService = {
  login({ username, password }) {
    return axios
      .post(API_URL + "/token", { username, password })
      .then((res) => res.data);
  },
};
