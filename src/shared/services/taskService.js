import axios from "axios";
import { API_URL } from "../../utils/properties";

export const TaskService = {
  getIssueDetail(id) {
    return axios
      .get(`${API_URL}/issue/getIssueByIdWithDetails/${id}`)
      .then((res) => res.data);
  },
};
