import React, { Component } from 'react'
import register_service from '../../../service/register_service';
import TextPropFields from '../../common/TextPropFields';
import { withRouter } from "react-router-dom";


export class Register extends Component {

   
    state = {
        email: '',
        name:'',
        password:'',
        confirmpassword:'',        
        // errormessage:   {
        //     email:'',
        //     name:'',
        //     password:'',
        //     confirmpassword:''
        // }    
         errormessage_email:[],
         errormessage_name:[] ,
         errormessage_pass:[],
         errormessage_confpass:[]
              
            
         
                   
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
              
            

            // let answer_errors={
            //     email:'',
            //     name:'',
            //     password:'',
            //     confirmpassword:''
            // };


            //масиви для запису помилок,відповідно до поля.
             let err=[];
             let err_name=[];
             let err_pass=[];
             let err_confpass=[];

             var res = error.response.data.errors;
           console.log(error.response.data);
            
            if(res.Email)
            {
                for (let index = 0; index < res.Email.length; index++) {
                    
                    err.push(res.Email[index]);
                }               
            }
            if(res.Name)
            {
                for (let index = 0; index < res.Name.length; index++) {
                    
                    err_name.push(res.Name[index]);
                }               
            }
            if(res.Password)
            {
                for (let index = 0; index < res.Password.length; index++) {
                    
                    err_pass.push(res.Password[index]);
                }               
            }
            if(res.ConfirmPassword)
            {
                for (let index = 0; index < res.ConfirmPassword.length; index++) {
                    
                    err_confpass.push(res.ConfirmPassword[index]);
                }               
            }


           
        //     if(res.Name)
        //     {
        //         let str="";
        //             res.Name.forEach(element => {
        //                 str+=element+" ";
        //                 console.log(element);
        //             });
        //             answer_errors.name=str;
        //    }

        //    if(res.Password)
        //    {
        //        let str="";
        //            res.Password.forEach(element => {
        //                str+=element+" ";
        //                console.log(element);
        //            });
        //            answer_errors.password=str;
        //    }

        //    if(res.ConfirmPassword)
        //    {
        //        let str="";
        //            res.ConfirmPassword.forEach(element => {
        //                str+=element+" ";
        //                console.log(element);
        //            });
        //            answer_errors.confirmpassword=str;
        //    }           
            
           
             this.setState({errormessage_email:err});
             this.setState({errormessage_name:err_name});
             this.setState({errormessage_pass:err_pass});
             this.setState({errormessage_confpass:err_confpass});
           
             
       }           
               
    }   

    //вивід у вигляді таблиці помилок по полю електронної пошти.
    createTableEmail = () => {

        let table = []
        for (let i = 0; i < this.state.errormessage_email.length; i++) {
            let children = []

            for (let j = 0; j < 1; j++)
            {
                children.push(<td className="text-danger" key={j} >{this.state.errormessage_email[i]}</td>)
            }            

            table.push(<tr key={i}>{children}</tr>)
        }
        return table
    }

    //вивід у вигляді таблиці помилок по полю імені.
    createTableName = () => {

        let table = []
        for (let i = 0; i < this.state.errormessage_name.length; i++) {
            let children = []

            for (let j = 0; j < 1; j++)
            {
                children.push(<td className="text-danger" key={j} >{this.state.errormessage_name[i]}</td>)
            }            

            table.push(<tr key={i}>{children}</tr>)
        }
        return table
    }

    //вивід у вигляді таблиці помилок по полю пароль.
    createTablePass = () => {

        let table = []
        for (let i = 0; i < this.state.errormessage_pass.length; i++) {
            let children = []

            for (let j = 0; j < 1; j++)
            {
                children.push(<td className="text-danger" key={j} >{this.state.errormessage_pass[i]}</td>)
            }            

            table.push(<tr key={i}>{children}</tr>)
        }
        return table
    }

    createTableConfPass = () => {

        let table = []
        for (let i = 0; i < this.state.errormessage_confpass.length; i++) {
            let children = []

            for (let j = 0; j < 1; j++)
            {
                children.push(<td className="text-danger" key={j} >{this.state.errormessage_confpass[i]}</td>)
            }            

            table.push(<tr key={i}>{children}</tr>)
        }
        return table
    }


    render() {
        
        const{email,name,password,confirmpassword}=this.state;    
       
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
                                <div mb-3="true">                               
                                    <table>
                                        <tbody>
                                        {this. createTableEmail()}
                                        </tbody>
                                    </table>
                                </div>                                    
                       
                                    
                            <TextPropFields 
                                field="name"
                                label="Name"
                                value={name}
                                onChangeHandler={this.onChangeState}/>
                                <div mb-3="true">
                                    <table>
                                        <tbody>
                                            {this.createTableName()}
                                        </tbody>
                                    </table>
                                </div>                                   
                      
                      
                            <TextPropFields 
                                field="password"
                                label="Password"
                                value={password}
                                onChangeHandler={this.onChangeState}/>
                                <div mb-3="true">                               
                                <table>
                                    <tbody>
                                    {this.createTablePass()}
                                    </tbody>
                                </table>
                                </div>
                                                

                            
                            <TextPropFields 
                                field="confirmpassword"
                                label="Confirm password"
                                value={confirmpassword}
                                onChangeHandler={this.onChangeState}/>    
                                <div mb-3="true">                               
                                <table>
                                    <tbody>
                                    {this.createTableConfPass()}
                                    </tbody>
                                </table>
                                </div>    
                    
                     
                      <button type="submit" className="btn btn-primary">Реєстрація</button>  

                    </form>
                </div>
            </div>

        )
    }
}

export default withRouter(Register);