import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { DeleteDataUser } from "../../../actions/deleteuser";
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { useState } from "react";

const DeleteUser = ({ match }) => {

    const userdel = match.params.id;
    const { list } = useSelector(res => res.user);
    const userdelcur = list.find(user => user.id == userdel);
    const dispatch = useDispatch();
    const startdata = {
        email: userdelcur.email,
        name: userdelcur.name,
        photo: userdelcur.photo

    }

    if (userdelcur) {
        console.log("Current user-->", userdelcur);
    }
    const onDelete = () => {
        try{
            console.log("Confirm delete uder");
            dispatch(DeleteDataUser(userdel))
            .then(res=>{
                dispatch(push("/user"));
            })

        }
        catch(errorres)
        {
            var res = errorres.response.data.errors;
                console.log("Another errors in delete :", res);
        }
        
    }


    return (
        <>
            <div className="card mb-3 offset-2 mt-5" style={{ width: "540px" }}>
                <div className="row g-0">
               
                    <div className="col-md-4">
                        <img src={startdata.photo} className="img-fluid rounded-start" alt="userphoto" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h4 className="card-title" style={{ color: "#FF0000" }} >Are you sure?</h4>
                            <h5 className="card-title">{startdata.name}</h5>
                            <p className="card-text">{startdata.email}</p>
                            <button type="submit" className="btn btn-danger" onClick={() => onDelete()}>Delete</button>
                        </div>
                    </div>
                   
                </div>
            </div>

        </>
    )

}

export default DeleteUser;