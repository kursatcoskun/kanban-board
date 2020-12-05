import * as actionTypes from "./projectActionTypes";
import { ProjectService } from "../../services/projectService";

export function getAllProjectsSuccess(res, loading) {
  return {
    type: actionTypes.GET_ALL_PROJECTS,
    payload: res,
    loading: loading,
  };
}

export function createProjectSuccess(res, loading) {
  return {
    type: actionTypes.CREATE_PROJECT,
    payload: res,
    loading: loading,
  };
}

export function removeProjectSuccess(res, loading) {
  return {
    type: actionTypes.REMOVE_PROJECT,
    payload: res,
    loading: loading,
  };
}

export function getAllProjects(payload) {
  return (dispatch) =>
    ProjectService.getAllProjects()
      .then((res) => dispatch(getAllProjectsSuccess(res, false)))
      .catch((err) => {
        console.error(err);
      });
}

export function createProject(payload) {
  return (dispatch) =>
    ProjectService.createProject(payload)
      .then((res) => dispatch(createProjectSuccess(res, false)))
      .catch((err) => {
        console.error(err);
      });
}

export function removeProject(payload) {
  return (dispatch) =>
    ProjectService.deleteProject(payload)
      .then((res) => dispatch(removeProjectSuccess(res, false)))
      .catch((err) => {
        console.error(err);
      });
}
