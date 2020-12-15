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

  createIssue(payload) {
    return axios
      .post(`${API_URL}/issue/CreateIssue`, payload)
      .then((res) => res.data);
  },

  deleteIssue(id) {
    return axios
      .delete(`${API_URL}/issue/deleteIssue/${id}`)
      .then((res) => res.data);
  },
};
