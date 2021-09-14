import { Loginreducer } from "./Loginreducr";
import loginlogout from "./Lgnlgoreducer";
import { Apireducer } from "./Apidatareducer";
import { combineReducers } from "redux";

const rootreducer = combineReducers({
    Loginreducer,
    loginlogout,
    Apireducer,

})

export default rootreducer