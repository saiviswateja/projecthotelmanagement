import React,{Component} from 'react';
import axios from 'axios';

class BodHome extends Component{
    constructor(){
        super();
        this.state = {
            loggedIn:false,
            boddetails:{},
            managers:[],
        }
    }
    componentDidMount(){
        const token = localStorage.getItem("token");
        const boddetails = localStorage.getItem("bod");
        if(token){
            this.setState({loggedIn:true});
            this.setState({boddetails:JSON.parse(boddetails)});
            console.log(JSON.parse(boddetails));
            axios.get('http://localhost:8000/api/manager/manager',{
                headers:{Authorization:"Bearer "+token}
            })
            .then(response=>{
                console.log(response.data)
            })
            .catch(err=>{
                console.log(err)
            })
        } 
    }
    render(){
        return (
            <>
            <br>
            </br>
            <br>
            </br>
            {this.state.loggedIn ?
            <div className="container-fluid">
                <h1>Hello Board of Director, {this.state.boddetails.name}</h1>
                
            </div>
            :
            <h1>404 forbidden user</h1>}
            </>
        );
    }
}

export default BodHome;