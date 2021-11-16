import { ADD_TO_CARD } from "../actions/types";

const initialState={

       catdItems:[],
       count:0        
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
                quantity:1,           
                price:dataprod.price
            };
           
            console.log("addeditem",addeditem);
            //перевіряю,чи є такий товар з таким айді у списку вже доданих в кошик.
            const inCart = state.catdItems.find((item) =>
            item.id === dataprod.id ? true : false
          );
            return {   
                ...state,    
                //якщо є вже такий у кошику...        
                catdItems:inCart ? state.catdItems.map((item) =>
                   item.id === dataprod.id
                     ? { ...item, quantity: item.quantity+ 1 }
                     :item)
                     : 
                     //якщо немає,він новий...
                      [
                       ...state.catdItems,                                  
                       addeditem
                   ],
                   count:state.count+1


                       
            //    ...state,
            //    catdItems:[
            //        ...state.catdItems,                                  
            //        addeditem
            //    ],
            //    count:state.count+1
              
             
            }            
        }
       
        default: 
        return state;
    }
}
export default cardReducer;