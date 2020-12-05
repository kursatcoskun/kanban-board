import axios from "axios";
import { API_URL } from "../../utils/properties";

export const UserService = {
  getAllUsers() {
    return axios.get(`${API_URL}/user/getAllUsers`).then((res) => res.data);
  },
};
