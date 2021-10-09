import React from 'react'
import register_service from '../../../service/register_service';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik'
import TextInput from '../../common/TextInput'
import { useDispatch } from 'react-redux';
import validate from './validation'
import { REGISTER_AUTH,ERRORS } from '../../../actions/types';
import { useSelector } from 'react-redux'
import authTokenRequest from '../../../service/auth_request';
import jwt from 'jsonwebtoken';


const Register = () => {

    const initState = {
        email: '',
        name: '',
        password: '',
        confirmpassword: ''          

    }

    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmitHandler = async (values) => {

        try {
            const result = await register_service.register(values);
           
            console.log("Відправлені дані: ", values);
            console.log("Result data:",result.data.token);

            var jwt_token=result.data.token;

            var verified = jwt.decode(jwt_token);            
            console.log("Verified.roles:",verified.roles);
            dispatch({type: REGISTER_AUTH, payload: verified});

           
            localStorage.setItem('Current user',jwt_token);
            console.log("Local:",localStorage);
            authTokenRequest(jwt_token);
            history.push("/");
        }
        catch (problem) {
            //обробка помилок валідації на стороні сервера.
            var res = problem.response.data.errors;
                   
            console.log("Errors:",res);
            let answer_errors={
                    email:'',                    
                };

            if (res.Email) {
                let str = "";
                res.Email.forEach(element => {
                    str += element + " ";
                   // console.log(element);
                });
                answer_errors.email = str;
            }
            dispatch({type:ERRORS,payloads:answer_errors.email});          
       }

    }


    const {errorvalid} = useSelector(res=>res.valid);
    console.log("Error valid",errorvalid);

    return (

        <div className="row">
            <div className="offset-md-3 col-md-6">
                <h1 className="text-center text-primary">Реєстрація</h1>

                <Formik
                    initialValues={initState}
                    validationSchema={validate()}
                    onSubmit={onSubmitHandler}
                >
                    <Form>
                        <TextInput
                            label="Email"
                            name="email"
                            id="email"
                            type="text"
                        />
                         {!!errorvalid &&<span className="text-danger">{errorvalid}</span> }

                        <TextInput
                            label="Name"
                            name="name"
                            id="name"
                            type="text"
                        />

                        <TextInput

                            label="Password"
                            name="password"
                            id="password"
                            type="password"
                        />

                        <TextInput
                            label="Confirm password"
                            name="confirmpassword"
                            id="confirmpassword"
                            type="password"
                        />
                        <button type="submit" className="btn btn-primary">Реєстрація</button>
                    </Form>
                </Formik>
            </div>
        </div>

    )

}

export default Register;