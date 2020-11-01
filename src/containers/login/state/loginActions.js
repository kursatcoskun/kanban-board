import * as actionTypes from "./loginActionTypes";
import { LoginService } from "../../../shared/services";

export function callLoginSuccess(res, loading) {
  return {
    type: actionTypes.CALL_LOGIN,
    payload: res,
    loading: loading,
  };
}

export function callLogin(payload) {
  return (dispatch) =>
    LoginService.login(payload)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
        return dispatch(callLoginSuccess(res, false));
      })
      .catch((err) => {
        console.error(err);
      });
}
