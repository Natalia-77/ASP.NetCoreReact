
import update_request from "../service/update_request";


export const UpdateDataUser = (id,datauser) => async (dispatch)=>{

    try {

      const resultdata=await update_request.putdata(id,datauser);
      console.log("Result update :",resultdata.data);

      return Promise.resolve(resultdata);  

    }
    catch(error) {

        const errorres=error.response;
        console.log("Error from update:",error.response);
        return Promise.reject(errorres.data);

    }
}