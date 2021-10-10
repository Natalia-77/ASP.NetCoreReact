import React from 'react'
import { Formik,Form } from 'formik'
import TextInput from '../../common/TextInput'
import  validate  from './validation'
import { LOGIN_AUTH } from '../../../actions/types'
import { useDispatch } from 'react-redux'
import register_service from '../../../service/register_service';
import { useHistory } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import authTokenRequest from '../../../service/auth_request';

const Login =()=> {

    const initState = {
        email: '',
        password: ''
    }

    const dispatch = useDispatch();    
    const history = useHistory();

    const onSubmitHandler= async(values) => {

        try {

            const formData = new FormData();
            Object.entries(values).forEach(([key, value]) => formData.append(key, value));
            const result = await register_service.login(formData);
          
            console.log("Відправлені дані: ", values);
            console.log("Result data:", result.data.token);

            var jwt_token = result.data.token;
            var verified = jwt.decode(jwt_token);
            console.log("Verified:",verified);
            console.log("Verified.roles:", verified.roles);

            dispatch({ type: LOGIN_AUTH, payload: verified });
            localStorage.setItem('Current user', jwt_token);         
                   
            authTokenRequest(jwt_token);
            history.push("/");

        }
        catch (errors) {
            var res = errors.response.data.errors;                   
            //console.log("Errors:",res);

        }

    }
   
        return (

            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1 className="text-center">Вхід на сайт</h1>
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

                            <TextInput
                                label="Password"
                                name="password"
                                id="password"
                                type="password"
                            />

                          <input type="submit" className="btn btn-success" value="Вхід"></input>
                        </Form>
                    </Formik>
                </div>
            </div>

           
        )
    
}

export default Login
