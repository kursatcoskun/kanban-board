import { combineReducers } from "redux";
import loginReducer from "../containers/login/state/loginReducer";
import issueReducer from "../shared/state/reducers/issueReducer";
import projectReducer from "../shared/state/reducers/projectReducer";
import utilsReducer from "../shared/state/reducers/utilsReducer";

const rootReducer = combineReducers({
  auth: loginReducer,
  issue: issueReducer,
  project: projectReducer,
  utils: utilsReducer,
});

export default rootReducer;
