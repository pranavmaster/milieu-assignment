import { combineReducers } from "redux";
import threadsReducer from "./threadsReducer";

export default combineReducers({
    threads: threadsReducer
    
});
