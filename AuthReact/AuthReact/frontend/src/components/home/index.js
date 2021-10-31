import React from 'react'
import { useSelector} from 'react-redux';
import ToastComponent from '../toast';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const HomePage = () => { 
      
     
    const { tost,toaster_login } = useSelector(state => state.auth);
   
    function Notify() {
        toast("Вітаємо!", {
            position: "top-right",           
            autoClose: 2000
            
        });
       
    }
   

    return (
        <>
            <h1>Home page</h1>
            <div className="col-md-6">            
                
                  {toaster_login &&  <ToastContainer toastStyle={{ backgroundColor: "#B0E0E6" }} />}
                    {Notify()}       
                       
                {tost && <ToastComponent />}
            </div>
        </>
    )
}

export default HomePage