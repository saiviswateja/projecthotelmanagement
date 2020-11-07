import React,{Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import GuestBook from './Guest/GuestBook';


class Home extends Component{
    constructor(){
        super();
        this.state = {
            rooms:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:8000/inventory/room")
                .then(response=>{
                    console.log(response.data);
                    this.setState({
                        rooms:response.data
                    },()=>{
                        console.log(this.state.rooms);
                        localStorage.setItem("rooms",JSON.stringify(this.state.rooms));
                    })
                })
    }
    render(){
        return (
            <div className="container-fluid" id="home">
                <br>
                </br>
                <div>
                <br></br>
                <h1>Welcome to the Motel Marvel</h1>
                <div className="jumbotron">
                <h3>Get the rooms for least prices in Banglore. You will get free massages and pass for Swimming Pools too.
                    Come enjoy and come again
                </h3>
                </div>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Type of Room</th>
                            <th scope="col">Price of the Room</th>
                        </tr>
                    </thead>
                    {
                        this.state.rooms.map(room=>{
                        return <tr>
                            <th scope="col">{room.typeName}</th>
                            <th scope="col">{room.price}</th>
                        </tr>
                        })
                    }
                </table>
                <Link to="/guest/book"><button className="btn btn-primary">Book Rooms</button></Link>
            </div>
        );
    }
}

export default Home;