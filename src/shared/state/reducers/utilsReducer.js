import * as types from "../actions/utilsActionTypes";
import initialState from "../../../state/initialState";

export default function UtilsReducer(state = initialState.utils, action) {
  switch (action.type) {
    case types.GET_ALL_USERS:
      return {
        ...state,
        users: action.payload.data,
        loading: action.loading,
      };
    default:
      return state;
  }
}
