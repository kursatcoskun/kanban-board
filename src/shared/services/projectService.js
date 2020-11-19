import axios from "axios";
import { API_URL } from "../../utils/properties";

export const ProjectService = {
  getAllProjects() {
    return axios
      .get(`${API_URL}/project/getAllProjects`)
      .then((res) => res.data);
  },
};
