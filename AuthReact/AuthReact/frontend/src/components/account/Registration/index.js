import React, { Component } from 'react'
import register_service from '../../../service/register_service';
import TextPropFields from '../../common/TextPropFields';
import { withRouter } from "react-router-dom";
import classnames from 'classnames';
export class Register extends Component {

   
    state = {
        email: '',
        name:'',
        password:'',
        confirmpassword:'',        
        errormessage:   {
            email:'',
            name:'',
            password:'',
            confirmpassword:''
        }     
                   
   }
    

    onChangeState=(e)=>{
               
            this.setState({[e.target.name]:e.target.value });             
        
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
           
            //var u=error.response.data.errors;            
            //  var p = Object.keys(u).map((key) => u[key]);           
            //  var listItems = p.map((item) => <li key={item +"1"} >{item}</li>);
            // this.setState({errormessage:listItems});    
              
            

            let answer_errors={
                email:'',
                name:'',
                password:'',
                confirmpassword:''
            };

            var res = error.response.data.errors;
            console.log(res);    
            if(res.Email!=null)
            {
                let str="";
                res.Email.forEach(element => {
                    str+=element+" ";
                    console.log(element);
                });
                answer_errors.email=str;
            }
           
            if(res.Name)
            {
                let str="";
                    res.Name.forEach(element => {
                        str+=element+" ";
                        console.log(element);
                    });
                    answer_errors.name=str;
           }

           if(res.Password)
           {
               let str="";
                   res.Password.forEach(element => {
                       str+=element+" ";
                       console.log(element);
                   });
                   answer_errors.password=str;
           }

           if(res.ConfirmPassword)
           {
               let str="";
                   res.ConfirmPassword.forEach(element => {
                       str+=element+" ";
                       console.log(element);
                   });
                   answer_errors.confirmpassword=str;
           }           
            
           
             this.setState({errormessage:answer_errors});
             console.log(this.state.errormessage.confirmpassword);
       }           
               
    }   


    render() {
        
        const{email,name,password,confirmpassword,errormessage}=this.state;    
      
        return (

            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1 className="text-center text-primary">Реєстрація</h1>
                    <form className="row g-3 was-validated" onSubmit={this.onSubmitHandler}>
                      
                            <TextPropFields
                                field="email"
                                label="E-mail"
                                value={email}
                                onChangeHandler={this.onChangeState} />                       
                        {!!errormessage.email && <span className="text-danger">{errormessage.email}</span>}
                               
                     <TextPropFields 
                        field="name"
                        label="Name"
                        value={name}
                        onChangeHandler={this.onChangeState}/>
                       {!!errormessage.name &&<span className="text-danger">{errormessage.name}</span> }
                       
                      
                      
                    <TextPropFields 
                        field="password"
                        label="Password"
                        value={password}
                        onChangeHandler={this.onChangeState}/>
                      {!!errormessage.password &&<span className="text-danger">{errormessage.password}</span>}
                     

                      
                    <TextPropFields 
                        field="confirmpassword"
                        label="Confirm password"
                        value={confirmpassword}
                        onChangeHandler={this.onChangeState}/>    
                      {!!errormessage.confirmpassword &&<span className="text-danger">{errormessage.confirmpassword}</span> }
                     
                      <button type="submit" className="btn btn-primary">Реєстрація</button>  

                    </form>
                </div>
            </div>

        )
    }
}

export default withRouter(Register);