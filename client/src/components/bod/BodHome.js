import React,{Component} from 'react';

class BodHome extends Component{
    constructor(){
        super();
        this.state = {
            loggedIn:false
        }
    }
    componentDidMount(){
        const token = localStorage.getItem("token");
        const boddetails = localStorage.getItem("bod");
        if(token){
            this.setState({loggedIn:true})
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
            <h1>logged in</h1>
            :
            <h1>404 forbidden user</h1>}
            </>
        );
    }
}

export default BodHome;