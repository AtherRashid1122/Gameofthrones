import { Loginreducer } from "./Loginreducr";
import loginlogout from "./Lgnlgoreducer";
import { Apireducer } from "./Apidatareducer";
import { combineReducers } from "redux";
import { Regitrationreducer } from "./Registrationreducer";
const rootreducer = combineReducers({
    Loginreducer,
    loginlogout,
    Apireducer,
    Regitrationreducer,


})

export default rootreducer;