import React,{Component} from 'react';
import axios from 'axios';

class LoginManager extends Component{
    constructor(){
        super();
        this.state = {
            email:"",
            password:""
        }
    }
    componentDidMount(){
        if(localStorage.getItem("token") && localStorage.getItem("user")!=null){
            window.location="/manager/home";
        }
    }
    loginBod(e){
        e.preventDefault();
        console.log("came here");
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const credentials = {
            email,
            password
        }
        console.log(credentials);
        axios.post('http://localhost:8000/api/manager/signin',credentials)
        .then(response=>{
            if(response.data.token){
                localStorage.setItem("token",response.data.token);
                localStorage.setItem("user",JSON.stringify(response.data.user));
                window.location = "/manager/home"
            }
            console.log(response.data);
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render(){
        return (
            <>
            <br>
            </br>
            <br>
            </br>
            <div className="jumbotron">
            <button className="btn btn-warning float-right">First Time Login</button>
            <h1>Manager Login</h1>
            <form>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" className="form-control" id="email"></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="password"></input>
                </div>
                <button className="btn btn-primary" onClick={this.loginBod.bind(this)}>Submit</button>
                <br>
                </br>
                <small><b>*If you are first time logging in your default passwor is shared to you email by the Board of director</b></small>
            </form>
            
            </div>
            </>
        );
    }
}

export default LoginManager;