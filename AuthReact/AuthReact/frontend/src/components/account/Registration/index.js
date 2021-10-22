import React, { useRef,useEffect} from 'react';
import { Formik, Form } from 'formik';
import TextInput from '../../common/TextInput';
import PhotoInput from '../../common/PhotoInput';
import { useDispatch } from 'react-redux';
import validate from './validation'
import { ERRORS } from '../../../actions/types';
import { useSelector } from 'react-redux';
import { RegisterUser } from '../../../actions/auth';
import Spinner from '../../common/loader';
import { push } from 'connected-react-router';

const Register = () => {
    
    const initState = {
        email: '',
        name: '',
        photo: null,
        password: '',
        confirmpassword: ''

    }
   
    const dispatch = useDispatch();
    const { load } = useSelector(state => state.auth);
    const refFormik = useRef();
    const titleRef = useRef();

    const onSubmitHandler = async (values) => {

        try {

            const formData = new FormData();
            Object.entries(values).forEach(([key, value]) => formData.append(key, value));
            dispatch(RegisterUser(formData))
                .then(result => {
                    dispatch(push("/"));
                })
                .catch(ex => {
                    let answer_errors = {
                        email: '',
                    };
                    Object.entries(ex.errors).forEach(([key, values]) => {
                        let str = '';
                        values.forEach(text => {
                            str += text + " ";
                        });
                        answer_errors.email = str;
                        dispatch({ type: ERRORS, payloads: answer_errors.email });

                    })
                })


            titleRef.current.scrollIntoView({ behavior: 'smooth' });


        }
        catch (problem) {

            var res = problem.response.data.errors;
            console.log("Another errors:", res);

        }

    }
    const { errorvalid } = useSelector(res => res.valid);

    useEffect(() => {
        refFormik.current.setErrors({
           "email": errorvalid
        })
      }, [errorvalid]);
    

    return (

        <div className="row">
            <div className="offset-md-3 col-md-6">
                <h1 ref={titleRef} className="text-center text-primary">Реєстрація</h1>
                {load && <Spinner />}
                <Formik
                    innerRef={refFormik}
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