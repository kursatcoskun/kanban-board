import * as types from "./loginActionTypes";
import initialState from "../../../state/initialState";

export default function LoginReducer(state = initialState.auth, action) {
  switch (action.type) {
    case types.CALL_LOGIN:
      return {
        ...state,
        loginResponse: action.payload.data,
        loading: action.loading,
      };
    default:
      return state;
  }
}
