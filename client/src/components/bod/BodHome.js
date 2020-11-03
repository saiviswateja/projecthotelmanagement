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
                console.log(response.data);
                this.setState({
                    managers:response.data
                })
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
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name of the manager</th>
                            <th scope="col">Email Id of the manager</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.managers.map(manager=>{
                            console.log(manager)
                        return <tr key={manager._id}>
                                <th scope="col">{manager.name}</th>
                                <th scope="col">{manager.email}</th>
                                <th scope="col"><button className="btn btn-danger" onClick={()=>{
                                    axios.delete(`http://localhost:8000/api/manager/delete/${manager._id}`,{
                                        headers:{
                                            Authorization:"Bearer "+localStorage.getItem("token")
                                        }
                                    })
                                    .then(response=>{
                                        this.setState({
                                            managers:this.state.managers.filter(manager=>manager._id!==response.data._id)
                                        })
                                    })
                                }}>Delete Manager</button></th>
                                </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
            :
            <h1>404 forbidden user</h1>}
            </>
        );
    }
}

export default BodHome;