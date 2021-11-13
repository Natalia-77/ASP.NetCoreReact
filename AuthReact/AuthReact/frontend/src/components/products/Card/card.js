import { useSelector } from 'react-redux';
import http from '../../../http_common';


const Card = () => {
    
  
    const  {catdItems} = useSelector(state => state.card);
  
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
                                
                                    </tr>)}
                        </tbody>
                    </table> }
                </>
        );
    


    // return (
    //     <div className="shopping-cart-table">
    //         <h2>Ваш кошик</h2>
    //         <table className="table">
    //             <thead />
    //             <tbody>
    //                 {
    //                     items.map(rend)
    //                 }
    //             </tbody>

    //         </table>
    //         <div>
    //             Total {total}
    //         </div>

    //     </div>

    // );
}
export default Card;