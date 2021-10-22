import authTokenRequest from '../service/auth_request';
import { REGISTER_AUTH,REGISTER_BEGIN, REGISTER_FAIL} from '../actions/types';
import jwt from 'jsonwebtoken';
import register_service from '../service/register_service';




export const RegisterUser=(usermodel)=>async(dispatch)=>{
   
    
    try {

        dispatch({type:REGISTER_BEGIN});
        const result = await register_service.register(usermodel);  
        //console.log("Result:",result.data);
        //console.log("Result data token:",result.data.token);
        var jwt_token=result.data.token;
        var verified = jwt.decode(jwt_token);       
       // console.log("Verified.roles:",verified.roles);
        localStorage.setItem('Current user',jwt_token);
        authTokenRequest(jwt_token);    
        //поставила затримку,щоб хоч трохи видно було лоадер.
        setTimeout(()=>{
          dispatch({type: REGISTER_AUTH, payload: verified});
        },3000);

        return Promise.resolve(result);       
       
    }
    catch(error) {
       
      const errorsdata = error.response;     
      // console.log("Problem register",error.response.data.errors);
      dispatch({type:REGISTER_FAIL,payload:errorsdata.data})
      return Promise.reject(errorsdata.data);
        

    }

}