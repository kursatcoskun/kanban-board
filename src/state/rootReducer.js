import { combineReducers } from "redux";
import loginReducer from "../containers/login/state/loginReducer";
import issueReducer from "../shared/state/reducers/issueReducer";

const rootReducer = combineReducers({
  auth: loginReducer,
  issue: issueReducer,
});

export default rootReducer;
