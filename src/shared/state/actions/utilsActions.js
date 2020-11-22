import * as actionTypes from "./utilsActionTypes";
import { UserService } from "../../services/userService";

export function getAllUsersSuccess(res, loading) {
  return {
    type: actionTypes.GET_ALL_USERS,
    payload: res,
    loading: loading,
  };
}

export function getAllUsers() {
  return (dispatch) =>
    UserService.getAllUsers()
      .then((res) => dispatch(getAllUsersSuccess(res, false)))
      .catch((err) => {
        console.error(err);
      });
}
