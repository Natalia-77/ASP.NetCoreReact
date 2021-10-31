import React from "react";
import { useSelector } from "react-redux";


const ToastComponent = () => {
    console.log("Toast");

    const {username} = useSelector(state => state.auth);  
    return (
        
        <div className="alert alert-primary" role="alert">
       Вітаємо вас  {username}  !Ви успішно зареєструвались! 
      </div>

    )

};
export default ToastComponent;


