import { combineReducers } from "redux";
import templateReducer from "./templateReducer";
import userReducer from "./userReducer";
import personalDetailReducer from "./personalDetailReducer"

let rootReducer = combineReducers({
    template:templateReducer,
    user:userReducer,
    details:personalDetailReducer
})

export default rootReducer;