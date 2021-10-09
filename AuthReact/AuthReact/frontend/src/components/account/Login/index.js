import React from 'react'
import { Formik,Form } from 'formik'
import TextInput from '../../common/TextInput'
import  validate  from './validation'
import { LOGIN_AUTH } from '../../../actions/types'
import { useDispatch } from 'react-redux'

const Login =()=> {

    const initState = {
        email: '',
        password: ''
    }

    const dispatch = useDispatch();
    
    const onSubmitHandler=(values) => {
        dispatch({type: LOGIN_AUTH, payload: values.email});
        console.log("values submit vf", values)
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
