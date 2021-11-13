import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { GetUser } from '../../actions/users';
import http from '../../http_common';
import { Link } from 'react-router-dom';

const UserList = () => {

    const dispatch = useDispatch();
    const  {list}  = useSelector(state => state.user);
    
    useEffect(() => {
        dispatch(GetUser());
        console.log("UseEffect done:");

    }, []); 

    return (
        <>            
            <table className="table">
                <thead className="table table-bordered">
                    <tr>
                       <th scope="col">Id</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {list && list.map((item) =>
                            <tr key={item.email}>
                                <td>{item.id}</td>
                                <td>
                                    <img src={http.defaults.baseURL + item.photo}
                                        alt="user photo"
                                        width="100"
                                    />
                                </td>
                                <td>{item.name}</td>
                                <td> 
                               
                            <Link to={`/admin/user/edit/${item.id}`}>Edit</Link> ||  
                            <Link to={`/admin/user/delete/${item.id}`}>Delete</Link>
                            
                        </td>  
                            </tr>)}
                </tbody>
            </table>
        </>
    )
}

export default UserList;