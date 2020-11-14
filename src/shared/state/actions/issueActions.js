import * as actionTypes from "./issueActionTypes";
import { DashboardService } from "../../services";

export function getDashboardOpenIssueSuccess(res, loading) {
  return {
    type: actionTypes.GET_DASHBOARD_ISSUE_OPEN,
    payload: res,
    loading: loading,
  };
}

export function getDashboardDoneIssueSuccess(res, loading) {
  return {
    type: actionTypes.GET_DASHBOARD_ISSUE_PROGRESS,
    payload: res,
    loading: loading,
  };
}

export function getDashboardProgressIssueSuccess(res, loading) {
  return {
    type: actionTypes.GET_DASHBOARD_ISSUE_DONE,
    payload: res,
    loading: loading,
  };
}

export function getDashboardOpenIssues(payload) {
  return (dispatch) =>
    DashboardService.getDashboardIssue({ ...payload, status: "OPEN" })
      .then((res) => dispatch(getDashboardOpenIssueSuccess(res, false)))
      .catch((err) => {
        console.error(err);
      });
}

export function getDashboardProgressIssues(payload) {
  return (dispatch) =>
    DashboardService.getDashboardIssue({ ...payload, status: "IN_PROGRESS" })
      .then((res) => {
        return dispatch(getDashboardProgressIssueSuccess(res, false));
      })
      .catch((err) => {
        console.error(err);
      });
}

export function getDashboardDoneIssues(payload) {
  return (dispatch) =>
    DashboardService.getDashboardIssue({ ...payload, status: "RESOLVED" })
      .then((res) => {
        return dispatch(getDashboardDoneIssueSuccess(res, false));
      })
      .catch((err) => {
        console.error(err);
      });
}