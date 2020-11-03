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
        axios.post('http://localhost:8000/bod/login',credentials)
        .then(response=>{
            if(response.data.token){
                localStorage.setItem("token",response.data.token);
                localStorage.setItem("bod",JSON.stringify(response.data.user));
                window.location = "/bod/home"
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
                <h1>Board of Director Login</h1>
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
            </form>
            </div>
            </>
        );
    }
}

export default LoginManager;