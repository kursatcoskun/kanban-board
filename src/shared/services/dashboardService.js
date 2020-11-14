import axios from "axios";
import { API_URL } from "../../utils/properties";

export const DashboardService = {
  getDashboardIssue({ userId, status }) {
    return axios
      .get(`${API_URL}/issue/dashboardIssue/${userId}/${status}`)
      .then((res) => res.data);
  },
};
