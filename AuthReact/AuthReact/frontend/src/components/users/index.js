import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { GetUser } from '../../actions/users';
import http from '../../http_common'

const UserList = () => {

    const dispatch = useDispatch();
    const { list } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(GetUser());
        console.log("UseEffect done:");

    }, []);

    return (
        <>            
            <table className="table">
                <thead className="table table-bordered">
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {list && list.map((item) =>
                            <tr key={item.email}>
                                <td>
                                    <img src={http.defaults.baseURL + item.photo}
                                        alt="user photo"
                                        width="100"
                                    />
                                </td>
                                <td>{item.email}</td>
                            </tr>)}
                </tbody>
            </table>
        </>
    )
}

export default UserList;