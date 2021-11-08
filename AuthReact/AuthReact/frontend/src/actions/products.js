import getproduct_request from "../service/getproduct_request";
import { GET_PRODUCTS } from "./types";

export const GetProducts=()=>async(dispatch)=>{

    try {
       
        const resproduct = await getproduct_request.getdataproduct(); 
        console.log("Result product list:",resproduct.data);        
        dispatch({type: GET_PRODUCTS, data: resproduct.data});    
       
    }
    catch(error) {
        console.log("Problem get products",error);

    }

}