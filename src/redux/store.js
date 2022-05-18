import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducer from "./reducer";

const storeFactory = () => {
  const middleware = [thunk];
  const reduxStore = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return reduxStore;
};

export default storeFactory;
