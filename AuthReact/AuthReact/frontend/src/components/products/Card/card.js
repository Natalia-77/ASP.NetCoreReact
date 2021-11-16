import { useSelector } from 'react-redux';
import http from '../../../http_common';


const Card = () => {
    
  
    const  {catdItems,count} = useSelector(state => state.card);
      
        return (
            <>   
                <h1>Card</h1>         
                     { <table className="table">
                         <thead className="table table-bordered">
                             <tr>
                                <th scope="col">Id</th>
                                 <th scope="col">Image</th>
                                 <th scope="col">Name</th>
                                 <th scope="col">Price</th>
                                 <th scope="col">Quantity</th>
                             </tr>
                         </thead>
                         <tbody>
                             {catdItems && catdItems.map((item) =>
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>
                                            <img src={http.defaults.baseURL + item.image}
                                                alt=" "
                                                width="100"
                                            />
                                        </td>
                                        <td>{item.name}</td>
                                        <td> {item.price} </td>                       
                                        <td> {item.quantity} </td>
                                    </tr>)}
                        </tbody>
                        <div className="p-text-bold">Total : {count}</div>
                    </table> }
                </>
        );    
}
export default Card;