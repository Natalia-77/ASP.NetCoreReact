import { GET_PRODUCTS } from "../actions/types";

const initialState={
    listproducts:[]
}

function productReducer(state=initialState,action){
    const{type,data}=action;
    console.log("Reducer product data :", data);

    switch(type)
    {
        case GET_PRODUCTS: {
            return {               
                listproducts:data
             
            }            
        }
        default: 
        return state;
    }
}
export default productReducer;