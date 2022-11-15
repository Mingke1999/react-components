import { createStore,applyMiddleware } from "redux"; //1. import module and create store
//applyMiddleware is used for loading middleware in devtool
//import services from "../reducer/services";
import rootReducer from "../reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
//seft define middleware
// const logger = store => next =>action => {
//     console.log("dispatch ->",action);
//     let result = next(action);
//     console.log("next state ->",store.getState());
//     return result;
// }

/**
 * @params reducer
 * @params middleware
 * recommended middlewares React Developer Tools, Redux DevTools
 */
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk))); //3. createStore with defined reducer

export default store;