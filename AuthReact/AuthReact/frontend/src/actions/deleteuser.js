import delete_request from "../service/delete_request";


export const DeleteDataUser = (id) => async (dispatch)=>{

    try {

      const resdata=await delete_request.deletedata(id);
      console.log("Result update :",resdata.data);

      return Promise.resolve(resdata);  

    }
    catch(error) {

        const errorres=error.response;
        console.log("Error from delete:",error.response);
        return Promise.reject(errorres.data);

    }
}