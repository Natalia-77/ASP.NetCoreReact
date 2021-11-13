import addprod_request from "../service/addprod_request";

export const AddProductData = (product) => async (dispatch)=>{

    try {

      const resultdata=await addprod_request.addproduct(product);
      console.log("Result add product :",resultdata.data);
      return Promise.resolve(resultdata);  

    }
    catch(error) {

        const errorres=error.response;
        console.log("Error from add new product:",error.response);
        return Promise.reject(errorres.data);

    }
}