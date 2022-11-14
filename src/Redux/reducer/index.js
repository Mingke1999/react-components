import { combineReducers } from "redux";
import services from "./services";
import event from "./event";

const rootReducer = combineReducers({
    services,
    event
})

export default rootReducer;