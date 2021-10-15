import { useState } from "react";

const PhotoInput=({refFormik,field})=>{

    const[photo,setPhoto]=useState("https://www.pairme.co/public/img/girl-default.jpg");
    const OnChangeHandler=(event)=>{
        const file=event.currentTarget.files[0];
        setPhoto(URL.createObjectURL(file));       
        refFormik.current.setFieldValue(field,file);
    }

    return (
        <div className="mb-4">

            <label htmlFor={field}
                className="form-label">

                <img src={photo}
                    alt="userphoto"
                    width="100"
                    style={{ cursor: "pointer" }} />

            </label>
            <input type="file"
            id={field}
            name={field}
            className="d-none"
            onChange={OnChangeHandler}/>

        </div>

    );

}

export default PhotoInput;