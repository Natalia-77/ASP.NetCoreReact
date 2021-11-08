import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { GetProducts } from "../../actions/products";
import http from "../../http_common";

const ProdList=()=>{

    const dispatch = useDispatch();
    const{listproducts}= useSelector(state => state.prod);
    useEffect(() => {
        dispatch(GetProducts());
        console.log("UseEffect done:");

    }, []);


    return (
        <>   
        <h1>Products</h1>         
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
                    {listproducts && listproducts.map((item) =>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>
                                    <img src={http.defaults.baseURL + item.image}
                                        alt="user photo"
                                        width="100"
                                    />
                                </td>
                                <td>{item.name}</td>
                                <td> {item.price} </td>                       
                        
                            </tr>)}
                </tbody>
            </table> }
        </>
    )


}
export default ProdList;