import axios from "axios";
import { API_URL } from "../../utils/properties";

export const UtilService = {
  getIssueStatuses(id) {
    return axios.get(`${API_URL}/issue/statuses`).then((res) => res.data);
  },
};
