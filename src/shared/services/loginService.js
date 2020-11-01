import axios from "axios";

export const LoginService = {
  login({ username, password }) {
    return axios
      .post("http://localhost:8000/api/token", { username, password })
      .then((res) => res.data);
  },

  getDashboardIssue({ userId, status }) {
    return axios
      .get(`http://localhost:8000/api/issue/dashboardIssue/${userId}/${status}`)
      .then((res) => res.data);
  },
};
