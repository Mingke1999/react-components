import { createStore } from "redux"; //1. import module and create store
//import services from "../reducer/services";
import rootReducer from "../reducer";
import { composeWithDevTools } from "redux-devtools-extension";
/**
 * @params reducer
 * @params middleware
 * recommended middlewares React Developer Tools, Redux DevTools
 */
const store = createStore(rootReducer,composeWithDevTools()); //3. createStore with defined reducer

export default store;