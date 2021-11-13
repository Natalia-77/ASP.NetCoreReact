import { GET_USERS} from '../actions/types';
import getuser_request from '../service/getuser_request';

export const GetUser=()=>async(dispatch)=>{

    try {
       
        const result = await getuser_request.getdata(); 
        console.log("Result user:",result.data);        
        dispatch({type: GET_USERS, datares: result.data});    
       
    }
    catch(error) {
        console.log("Problem get users",error);

    }

}