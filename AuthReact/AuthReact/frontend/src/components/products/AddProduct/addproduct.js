import React, { useRef,useEffect} from 'react';
import { Formik, Form } from 'formik';
import TextInput from '../../common/TextInput';
import PhotoInputAddProd from '../../common/PhotoInputAddProd';
import { useDispatch } from 'react-redux';
import { AddProductData } from '../../../actions/addproduct';
import { push } from 'connected-react-router';




 const AddProduct = () => {
    
    const initState = {        
        name: '',
        photo: null,
        price: null

    }
   
    const dispatch = useDispatch();
    const refer = useRef();
    const titleRef = useRef();
     
    
    const onSubmitHandler = async (values) => {

        try {

            const formData = new FormData();
            Object.entries(values).forEach(([key, value]) => formData.append(key, value));
            dispatch(AddProductData(formData))
                .then(result => {
                   
                    dispatch(push("/product"));                    
                })
                .catch(ex => {
                    
                })


            titleRef.current.scrollIntoView({ behavior: 'smooth' });


        }
        catch (problem) {

            var res = problem.response.data.errors;
            console.log("Another errors:", res);

        }

    }
       

    return (
       
        <div className="row">
            <div className="offset-md-3 col-md-6">
                <h1 ref={titleRef} className="text-center text-primary">Додати новий продукт</h1>
                               
                <Formik
                    innerRef={refer}
                    initialValues={initState}                  
                    onSubmit={onSubmitHandler}
                >
                    <Form >

                        <TextInput
                            label="Name"
                            name="name"
                            id="name"
                            type="text"
                        />                      
                        
                        <PhotoInputAddProd
                            refFormik={refer}
                            field="photo"
                        />

                        <TextInput

                            label="Price"
                            name="price"
                            id="price"
                            type="text"
                        />                       
                        <button type="submit" className="btn btn-primary">Додати</button>
                                        
                    </Form>
                </Formik>
                
            </div>
                    

        </div>
       
    )

}

export default AddProduct;