import React, { Component } from 'react'
import register_service from '../../../service/register_service';
import TextPropFields from '../../common/TextPropFields';
import { withRouter } from "react-router-dom";

export class Register extends Component {

    state = {
        email: '',
        name:'',
        password:'',
        confirmpassword:''
    }

    onChangeState=(e)=>{

          this.setState({[e.target.name]:e.target.value});
    }

    onSubmitHandler=async(e)=>{
        e.preventDefault();
        console.log("Посилаємо на сервер", this.state);
        //register_service.register(this.state);
        try{
            const result = await register_service.register(this.state);
            console.log("Server is good result----- ", result);
            this.props.history.push("/");
        }
        catch(error) {
            console.log("Server is bad ", error.response.data.errors);
        }
    }

    render() {
        //console.log("state",this.state);
        const{email,name,password,confirmpassword}=this.state;
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

                    <TextPropFields 
                        field="name"
                        label="Name"
                        value={name}
                        onChangeHandler={this.onChangeState}/>

                    <TextPropFields 
                        field="password"
                        label="Password"
                        value={password}
                        onChangeHandler={this.onChangeState}/>

                    <TextPropFields 
                        field="confirmpassword"
                        label="Confirm password"
                        value={confirmpassword}
                        onChangeHandler={this.onChangeState}/>    

                      <button type="submit" className="btn btn-primary">Реєстрація</button>  

                    </form>
                </div>
            </div>

        )
    }
}

export default withRouter(Register);