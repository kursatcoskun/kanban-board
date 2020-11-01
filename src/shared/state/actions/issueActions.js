import * as actionTypes from "./issueActionTypes";
import { LoginService } from "../../services";

export function getDashboardOpenIssueSuccess(res, loading) {
  return {
    type: actionTypes.GET_DASHBOARD_ISSUE_OPEN,
    payload: res,
    loading: loading,
  };
}

export function getDashboardOpenIssues(payload) {
  return (dispatch) =>
    LoginService.getDashboardIssue({ ...payload, status: "OPEN" })
      .then((res) => {
        return dispatch(getDashboardOpenIssueSuccess(res, false));
      })
      .catch((err) => {
        console.error(err);
      });
}
