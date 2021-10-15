import authTokenRequest from '../service/auth_request';
import { REGISTER_AUTH,REGISTER_BEGIN} from '../actions/types';
import jwt from 'jsonwebtoken';
import {push} from 'connected-react-router';
import register_service from '../service/register_service';



export const RegisterUser=(usermodel)=>async(dispatch)=>{

    try {

        //dispatch({type:REGISTER_BEGIN});
        const result = await register_service.register(usermodel);  
        //console.log("Result:",result.data);
        //console.log("Result data token:",result.data.token);
        var jwt_token=result.data.token;
        var verified = jwt.decode(jwt_token); 
        dispatch({type: REGISTER_AUTH, payload: verified});//here
       // console.log("Verified.roles:",verified.roles);
        localStorage.setItem('Current user',jwt_token);
        authTokenRequest(jwt_token);
        //dispatch({type: REGISTER_AUTH, payload: verified});      
        dispatch({type:REGISTER_BEGIN})
        setTimeout(() => {
          dispatch(push("/"))
        }, 3000);
       
    }
    catch(error) {
        console.log("Problem register",error);

    }

}