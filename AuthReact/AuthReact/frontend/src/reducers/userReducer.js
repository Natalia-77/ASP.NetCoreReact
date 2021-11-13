import {GET_USERS } from "../actions/types";


const initialState ={
  list:[]
  
}

function userReducer(state=initialState,action)
{
    const{type,datares}=action;
    console.log("Reducer user data :", datares);

    switch(type)
    {
        case GET_USERS: {
            return {               
              list:datares
             
            }            
        }
        default: 
        return state;
    }
    
}
export default userReducer;