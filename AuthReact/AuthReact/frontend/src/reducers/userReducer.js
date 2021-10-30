import {GET_USERS } from "../actions/types";


const initialState ={
  list:[]
  
}

function userReducer(state=initialState,action)
{
    const{type,data}=action;
    console.log("Reducer user data :", data);

    switch(type)
    {
        case GET_USERS: {
            return {               
              list:data
             
            }            
        }
        default: 
        return state;
    }
    
}
export default userReducer;