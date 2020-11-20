import * as types from "../actions/projectActionTypes";
import initialState from "../../../state/initialState";

export default function ProjectReducer(state = initialState.project, action) {
  switch (action.type) {
    case types.GET_ALL_PROJECTS:
      return {
        ...state,
        allProjects: action.payload.data,
        loading: action.loading,
      };
    case types.CREATE_PROJECT:
      return {
        ...state,
        createProjectResponse: action.payload,
        loading: action.loading,
      };
    default:
      return state;
  }
}
