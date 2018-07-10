import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import { reducer as reduxFormReducer } from "redux-form";
import personReducer from "./reducers/PersonList";

const rootReducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  personReducer
});

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, createLogger()),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  console.log(store);

  return store;
};

export default configureStore;
