import React,{useRef} from 'react';
import { Formik, Form } from 'formik';
import TextInput from '../../common/TextInput';
import PhotoInput from '../../common/PhotoInput';
import { useDispatch } from 'react-redux';
import validate from './validation'
import { ERRORS } from '../../../actions/types';
import { useSelector } from 'react-redux';
import { RegisterUser } from '../../../actions/auth';
import Spinner from '../../common/loader';



const Register = () => {

    const initState = {
        email: '',
        name: '',
        photo:null,
        password: '',
        confirmpassword: ''          

    }

   // const history = useHistory();
    const dispatch = useDispatch();
    const { load } = useSelector(state => state.auth);
    const refFormik=useRef();

    const onSubmitHandler = async (values) => {

        try {
           
            const formData = new FormData();      
            Object.entries(values).forEach(([key, value]) => formData.append(key, value));      
            dispatch(RegisterUser(formData));           
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
                {load && <Spinner />}
                <Formik 
                    innerRef = {refFormik}
                    initialValues={initState}
                    validationSchema={validate()}
                    onSubmit={onSubmitHandler}
                >
                    <Form >
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

                         <PhotoInput
                            refFormik={refFormik}
                            field="photo"
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