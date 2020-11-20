import * as actionTypes from "./projectActionTypes";
import { ProjectService } from "../../services/projectService";

export function getAllProjectsSuccess(res, loading) {
  return {
    type: actionTypes.GET_ALL_PROJECTS,
    payload: res,
    loading: loading,
  };
}

export function getAllProjects() {
  return (dispatch) =>
    ProjectService.getAllProjects()
      .then((res) => dispatch(getAllProjectsSuccess(res, false)))
      .catch((err) => {
        console.error(err);
      });
}
