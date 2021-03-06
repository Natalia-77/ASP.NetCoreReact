import { REGISTER_AUTH,LOGIN_AUTH,LOG_OUT,REGISTER_BEGIN,REGISTER_FAIL} from "../actions/types";


const initialState ={
    isAuth: false,   
    user:{},
    role:"",
    load:false,
    tost:false,
    toaster_login:false  
  
}


function authReducer(state = initialState, action) {
    const {type, payload} = action;
    console.log("Reducer data :", payload);
    

    switch(type){
        case REGISTER_AUTH: {
            return {               
               isAuth: true,
               user:payload,           
               tost:false
               
            }            
        }
        case LOGIN_AUTH: {
            return {
                isAuth: true,
                user: payload,
                load: false,
                toaster_login: true
            }
        }       
        case LOG_OUT: {
            return {
                isAuth: false,
                user: {}             
               
            }
        }
        case REGISTER_BEGIN:{
            return{
               ...state,               
                load:true,             
                tost:true

            }
        }
        case REGISTER_FAIL:{
            return{
                ...state,
                load:false
            }
        }
        default:{
            return state;
        }

    }   
    
}

export default authReducer;