import * as types from "../actions/issueActionTypes";
import initialState from "../../../state/initialState";

export default function IssueReducer(state = initialState.issue, action) {
  switch (action.type) {
    case types.GET_DASHBOARD_ISSUE_OPEN:
      return {
        ...state,
        dashboardOpenIssues: action.payload.data,
        loading: action.loading,
      };
    case types.GET_DASHBOARD_ISSUE_PROGRESS:
      return {
        ...state,
        dashboardProgressIssues: action.payload.data,
        loading: action.loading,
      };
    case types.GET_DASHBOARD_ISSUE_DONE:
      return {
        ...state,
        dashboardDoneIssues: action.payload.data,
        loading: action.loading,
      };
    case types.GET_ISSUE_DETAILS:
      return {
        ...state,
        issueDetails: action.payload.data,
        loading: action.loading,
      };
    case types.UPDATE_ISSUE:
      return {
        ...state,
        updateIssueResponse: action.payload.data,
        loading: action.loading,
      };
    case types.GET_ALL_ISSUES:
      return {
        ...state,
        allIssues: action.payload.data,
        loading: action.loading,
      };
    case types.CREATE_ISSUE:
      return {
        ...state,
        createIssueResponse: action.payload.data,
        loading: action.loading,
      };
    case types.DELETE_ISSUE:
      return {
        ...state,
        deleteIssueResponse: action.payload.data,
        loading: action.loading,
      };
    default:
      return state;
  }
}
