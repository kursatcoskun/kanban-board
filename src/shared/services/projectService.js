import axios from "axios";
import { API_URL } from "../../utils/properties";

export const ProjectService = {
  getAllProjects() {
    return axios
      .get(`${API_URL}/project/getAllProjects`)
      .then((res) => res.data);
  },
  createProject(payload) {
    return axios
      .post(`${API_URL}/project/CreateProject`, payload)
      .then((res) => res.data);
  },
};
