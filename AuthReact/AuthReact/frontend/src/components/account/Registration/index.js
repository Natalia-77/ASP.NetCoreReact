import React, { Component } from 'react'
import register_service from '../../../service/register_service';
import TextPropFields from '../../common/TextPropFields';
import { withRouter } from "react-router-dom";

import ReactDOM from 'react-dom';


export class Register extends Component {

   
    state = {
        email: '',
        name:'',
        password:'',
        confirmpassword:'',        
        errormessage:{       
        }       
         
    }
    

    onChangeState=(e)=>{       
        
            this.setState({[e.target.name]:e.target.value  });
     }    
    
    onSubmitHandler=async(e)=>{
        e.preventDefault();
        console.log("Посилаємо на сервер", this.state);
        //register_service.register(this.state);
        try{
            const result = await register_service.register(this.state);
            console.log("Відправлені дані: ", result);
            this.props.history.push("/");
        }
        catch(error)
        {
            //this.setState({ errormessage: error.response.data.errors, isLoaded: true });
            //console.log(this.state.isLoaded);
            var u = error.response.data.errors;
            var p = Object.keys(u).map((key) => u[key]);           
            const listItems = p.map((item) => <li key={item +"1"} >{item}</li>);
            this.setState({ errormessage: listItems});
            console.log(this.state.errormessage);               
                    
            
        }           
       
        
    }

    


    render() {
        
        const{email,name,password,confirmpassword,errormessage}=this.state;    
      
        return (

            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1 className="text-center text-primary">Реєстрація</h1>               
                 <form onSubmit={this.onSubmitHandler}> 
                    
                    <TextPropFields 
                        field="email"
                        label="E-mail"
                        value={email}
                       onChangeHandler={this.onChangeState}/>                           
                         {!!errormessage[0] ? <span className="text-danger"  >{errormessage[0]}</span> :' '}                      
                         
                    <TextPropFields 
                        field="name"
                        label="Name"
                        value={name}
                        onChangeHandler={this.onChangeState}/>
                        {!!errormessage[1] ? <span className="text-danger" >{errormessage[1]}</span> : ' '}
                       
                    <TextPropFields 
                        field="password"
                        label="Password"
                        value={password}
                        onChangeHandler={this.onChangeState}/>
                      {!!errormessage[2] ? <span className="text-danger" >{errormessage[2]}</span> : ' '}

                    <TextPropFields 
                        field="confirmpassword"
                        label="Confirm password"
                        value={confirmpassword}
                        onChangeHandler={this.onChangeState}/>    
                      {!!errormessage[3] ? <span className="text-danger" >{errormessage[3]}</span> : ' '}
                      <button type="submit" className="btn btn-primary">Реєстрація</button>  

                    </form>
                </div>
            </div>

        )
    }
}

export default withRouter(Register);