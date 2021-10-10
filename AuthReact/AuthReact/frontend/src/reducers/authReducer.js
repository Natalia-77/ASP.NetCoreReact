import { REGISTER_AUTH,LOGIN_AUTH,LOG_OUT } from "../actions/types";


const initialState ={
    isAuth: false,
    username: "",
    role:""
}


function authReducer(state = initialState, action) {
    const {type, payload} = action;
    console.log("reducer data", payload);

    switch(type){
        case REGISTER_AUTH: {
            return {
                isAuth: true,
                username: payload.name,
                role:payload.roles
            }
            
        }
        case LOGIN_AUTH: {
            return {
                isAuth: true,
                username: payload.name,
                role:payload.roles
            }
        }
        case LOG_OUT: {
            return {
                isAuth: false,
                username: "",
                role:""
            }
        }

    }
    return state;
}

export default authReducer;