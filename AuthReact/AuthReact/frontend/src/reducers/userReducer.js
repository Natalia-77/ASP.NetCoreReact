import {GET_USERS } from "../actions/types";


const initialState ={
   list:[]
  
}

function userReducer(state=initialState,action)
{
    const{type,payload}=action;
    console.log("Reducer user data :", payload);

    switch(type)
    {
        case GET_USERS: {
            return {               
               list:payload
            }            
        }

    }
    return state;
}
export default userReducer;