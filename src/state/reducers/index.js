import {combineReducers} from "redux";
import frameReducer from "./frameReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
    frame: frameReducer,
    user: userReducer
})

export default reducers
