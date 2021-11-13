import { ADD_TO_CARD } from "../actions/types";

const initialState={

       catdItems:[]         
}

function cardReducer(state=initialState,action){
    const{type,dataprod}=action;
    console.log("Reducer add card id-->> :", dataprod);

    switch(type)
    {
        case ADD_TO_CARD: {
            const addeditem={
                id:dataprod.id,
                name:dataprod.name,
                image:dataprod.image,
                count:1,
                price:dataprod.price
            };
           
            console.log("addeditem",addeditem);
            return {               
               ...state,
               catdItems:[
                   state.catdItems,                                  
                   addeditem
               ]   
              
             
            }            
        }
       
        default: 
        return state;
    }
}
export default cardReducer;