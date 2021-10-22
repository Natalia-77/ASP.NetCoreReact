import {GET_USERS } from "../actions/types";


const initialState ={
   list:[]
  
}

function userReducer(state=initialState,action)
{
    const{type,payloads}=action;
    console.log("Reducer user data :", payloads);

    switch(type)
    {
        case GET_USERS: {
            return {               
               list:payloads
            }            
        }

    }
    return state;
}
export default userReducer;