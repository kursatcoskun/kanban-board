import { combineReducers } from "redux";
import loginReducer from "../containers/login/state/loginReducer";

const rootReducer = combineReducers({
  loginReducer,
});

export default rootReducer;
