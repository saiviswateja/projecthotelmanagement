import axios from 'axios';
import React,{Component} from 'react';

class ManagerHome extends Component{
    constructor(){
        super();
        this.state = {
            loggedIn:false,
            token:"",
            managerFromBackend:{},
            rooms:[]
        }
    }
    componentDidMount(){
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        if(user!=null && token!=null){
            console.log("user "+user)
            this.setState({
                loggedIn:true,
                managerFromBackend:JSON.parse(user),
                token:token
            })
            axios.get('http://localhost:8000/inventory/room',{
                headers:{Authorization:"Bearer "+token}
            })
            .then(response=>{
                console.log(response.data)
                this.setState(({
                    rooms:response.data
                }))
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
    saveRoom(e){
        console.log("save the room bro");
        const typeName = document.getElementById('typeName').value;
        const price = document.getElementById('price').value;
        const room = {
            typeName:typeName,
            price:price
        }
        console.log(room);
        axios.post('http://localhost:8000/inventory/room',room,{
            headers:{
                'Authorization':"Bearer "+localStorage.getItem("token"),
                'Content-Type':"application/json"
            }  
        })
        .then(response=>{
            console.log(response.data);
            const tempRooms = this.state.rooms.push(response.data);
            console.log(tempRooms)
            console.log(this.state.rooms)
            this.setState({
                rooms:this.state.rooms
            })
            console.log("rooms list after saing")
            console.log(this.state.rooms)
        })
    }
    render(){
        return (
            <>
            <br>
            </br>
            <br></br>
            {this.state.loggedIn?
            <div className="container-fluid">
            <h1>Hello Manager, {this.state.managerFromBackend.name}</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Room Type</th>
                        <th scope="col">Room Price</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.rooms.map(room=>{
                    return <tr key={room._id}>
                            <th scope="col">{room.typeName}</th>
                            <th scope="col">{room.price}</th>
                            <th scope="col"><button className="btn btn-danger" onClick={()=>{
                                console.log("delete button clicked");
                                axios.delete(`http://localhost:8000/inventory/room/${room._id}`,{
                                    headers:{
                                        Authorization:"Bearer "+localStorage.getItem("token")
                                    }
                                })
                                .then(response=>{
                                    console.log(response.data)
                                    console.log(response.data)
                                    this.setState({
                                        rooms:this.state.rooms.filter(room=>room._id!==response.data._id)
                                    })
                                })
                            }}>Delete this room type</button></th>
                            </tr>



                    })
                }
                <tr>
                    <th></th>
                    <th><button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Add room</button></th>
                    <th><button className="btn btn-warning" onClick={()=>{
                        localStorage.clear();
                        window.location="/home";
                    }}>Log Out</button></th>
                </tr>
                </tbody>
            </table>
        </div>
            :
            <h1>Unauthorised access</h1>
            }
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">ADD ROOM</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>
                            <b>Please verify the room Type and price with the board of director</b>
                        </p>
                        <>
                            <div className="form-group">
                                <label>Type of the Room</label>
                                <input type="email" className="form-control" id="typeName"></input>
                                <small class="form-text text-muted">Please make sure this room is unique</small>
                            </div>
                            <div className="form-group">
                                <label>Price for the Room</label>
                                <input type="number" className="form-control" id="price"></input>
                            </div>
                        </>
                    </div>
                    <div class="modal-footer">
                        {/* <a type="button" class="btn btn-secondary" data-dismiss="modal">cancel</a> */}
                        <button type="button" class="btn btn-primary" onClick={this.saveRoom.bind(this)}>save</button>
                    </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default ManagerHome;