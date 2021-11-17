import { ADD_TO_CARD,CART_LOAD_PRODUCT } from "./types";
import cartService from "../service/cart_request";



export const AddCartProduct = (product) => async (dispatch) => {
    try {
        const {data} = await cartService.add(product);       
        dispatch({type:ADD_TO_CARD,dataprod:data});
        return Promise.resolve();
        
    }
    catch(err) {
        const {data} = err.response;
        return Promise.reject(data);
    }
}


export const getCartUser = () => async (dispatch) => {
    const {data} = await cartService.list();
    dispatch({type: CART_LOAD_PRODUCT, payload: data});
}