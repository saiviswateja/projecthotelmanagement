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
        if(token && JSON.parse(boddetails).role==0){
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
    saveManager(e){
        const emailToSave = document.getElementById('email').value;
        axios.post('http://localhost:8000/api/manager/add',
            {
                name:"DEFAULT",
                email:emailToSave,
                number:0,
                password:"123welcome"
            }
        ,{
            headers:{
                'Authorization':"Bearer "+localStorage.getItem("token"),
                'Content-Type':"application/json"
            }  
        })
        .then(response=>{
            console.log(response.data);
            const tempManagers = this.state.managers.push(response.data);
            console.log(tempManagers)
            this.setState({
                managers:this.state.managers
            })
        })
        .catch(err=>{
            console.log(err);
        })
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
                    <tr>
                        <th></th>
                        <th><button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Add User</button></th>
                        <th><button className="btn btn-warning" onClick={()=>{
                            localStorage.clear();
                            window.location="/home";
                        }}>Log Out</button></th>
                    </tr>
                    </tbody>
                </table>
            </div>
            :
            <h1>404 forbidden user</h1>}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">ADD MANAGER</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>
                            <b>By defalt every other field for the manager details will be "DEFAULT". This can be updated by the 
                            manager when he logged in first time</b>
                        </p>
                        <form>
                            <div className="form-group">
                                <label>Email Addreess to Add</label>
                                <input type="email" className="form-control" id="email"></input>
                                <small class="form-text text-muted">Please make sure this mail id is unique</small>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">cancel</button>
                        <button type="button" class="btn btn-primary" onClick={this.saveManager.bind(this)}>save</button>
                    </div>
                    </div>
                </div>
                </div>
            </>
        );
    }
}

export default BodHome;