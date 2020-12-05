import * as actionTypes from "./issueActionTypes";
import { DashboardService } from "../../services";
import { TaskService } from "../../services/taskService";

export function getDashboardOpenIssueSuccess(res, loading) {
  return {
    type: actionTypes.GET_DASHBOARD_ISSUE_OPEN,
    payload: res,
    loading: loading,
  };
}

export function getDashboardDoneIssueSuccess(res, loading) {
  return {
    type: actionTypes.GET_DASHBOARD_ISSUE_DONE,
    payload: res,
    loading: loading,
  };
}

export function getAllIssuesSuccess(res, loading) {
  return {
    type: actionTypes.GET_ALL_ISSUES,
    payload: res,
    loading: loading,
  };
}

export function getDashboardProgressIssueSuccess(res, loading) {
  return {
    type: actionTypes.GET_DASHBOARD_ISSUE_PROGRESS,
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

export function getIssueDetailsSuccess(res, loading) {
  return {
    type: actionTypes.GET_ISSUE_DETAILS,
    payload: res,
    loading: loading,
  };
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

export function getAllIssues(id) {
  return (dispatch) =>
    TaskService.getAllIssuesByAssignee(id)
      .then((res) => {
        return dispatch(getAllIssuesSuccess(res, false));
      })
      .catch((err) => {
        console.error(err);
      });
}

export function getIssueDetails(payload) {
  return (dispatch) =>
    TaskService.getIssueDetail(payload)
      .then((res) => {
        return dispatch(getIssueDetailsSuccess(res, false));
      })
      .catch((err) => {
        console.error(err);
      });
}

export function updateIssueSuccess(res, loading) {
  return {
    type: actionTypes.UPDATE_ISSUE,
    payload: res,
    loading: loading,
  };
}

export function updateIssue(payload) {
  return (dispatch) =>
    TaskService.updateIssue(payload)
      .then((res) => {
        return dispatch(updateIssueSuccess(res, false));
      })
      .catch((err) => {
        console.error(err);
      });
}
