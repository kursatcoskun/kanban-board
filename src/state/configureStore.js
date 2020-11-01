import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./rootReducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middlewares = composeEnhancers(
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );

  const store = createStore(rootReducer, initialState, middlewares);
  return store;
}
