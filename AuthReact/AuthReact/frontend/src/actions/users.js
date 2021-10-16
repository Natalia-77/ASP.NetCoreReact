import { GET_USERS} from '../actions/types';
import getuser_request from '../service/getuser_request';

export const GetUser=()=>async(dispatch)=>{

    try {
       
        const result = await getuser_request.getdata(); 
        console.log("Result user:",result);        
        dispatch({type: GET_USERS, payload: result.data});    
       
    }
    catch(error) {
        console.log("Problem get users",error);

    }

}