import axios from "axios";
import { API_URL } from "../../utils/properties";

export const TaskService = {
  getIssueDetail(id) {
    return axios
      .get(`${API_URL}/issue/getIssueByIdWithDetails/${id}`)
      .then((res) => res.data);
  },

  updateIssue(issue) {
    return axios
      .put(`${API_URL}/issue/updateIssue/${issue.id}`, issue)
      .then((res) => res.data);
  },

  getAllIssuesByAssignee(id) {
    return axios
      .get(`${API_URL}/issue/getAllIssuesByAssignee/${id}`)
      .then((res) => res.data);
  },
};
