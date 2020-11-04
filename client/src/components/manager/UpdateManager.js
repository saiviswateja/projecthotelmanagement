import axios from 'axios';
import React,{Component} from 'react';

class UpdateManager extends Component{
    onUpdateClicked(e){
        e.preventDefault();
        console.log("update clickes");
        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const mobileNumber = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        const repassword = document.getElementById('re-password').value;
        const currentPassword = document.getElementById('current-password').value;
        if(email!="" && password!="" && mobileNumber!="" && password!="" && repassword!="" && currentPassword!=""){
        if(currentPassword=="123welcome"){
            if(password===repassword){
                    axios.put('http://localhost:8000/api/manager/update',{
                        email,
                        name,
                        mobileNumber,
                        password
                    },
                    {
                        headers:{"Content-Type":"application/json"}
                    })
                    .then(response=>{
                        alert("User data applied succcessfully");
                        window.location = "/manager/login"
                    })
            }   
            else{
                alert("Password and retype should match");
            }
        }
        else{
            alert("Please make sure that the current default password is typed");
        }
        }
        else{
            alert("Please provide all the fields");
        }
    }
    render(){
        return (
            <>
            <div className="jumbotron" style={{paddingLeft:"100px",paddingRight:"100px"}}>
            <h1>Updation of Manager Details</h1>
            <form>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" className="form-control" id="email"></input>
                    <small><b>Please enter the correct mail id you recieved in your mail from director</b></small>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="email" className="form-control" id="name"></input>
                </div>
                <div className="form-group">
                    <label>Mobile Number</label>
                    <input type="number" className="form-control" id="phone"></input>
                </div>
                <div className="form-group">
                    <label>Current Password</label>
                    <input type="password" className="form-control" id="current-password"></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="password"></input>
                </div>
                <div className="form-group">
                    <label>Re-Type Password</label>
                    <input type="password" className="form-control" id="re-password"></input>
                </div>
                <button className="btn btn-primary" onClick={this.onUpdateClicked.bind(this)}>Submit</button>
                <br>
                </br>
            </form>
            
            </div>
            </>
        )
    }
}

export default UpdateManager;