import React,{Component} from 'react';
import axios from 'axios';

class GuestBook extends Component{
    constructor(props){
        super(props);
        this.state = {
            guestDetails:{

            },
            roomCount:0,
            rooms:[]
        }
    }
    componentDidMount(){
        
        this.setState({
            rooms:JSON.parse(localStorage.getItem("rooms"))
        })
    }
    onProceed(e){
        e.preventDefault();
        console.log("came to on proceed");
        const name = document.getElementById('name').value;
        const mobile = document.getElementById('mobile').value;
        const email = document.getElementById('mailid').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value; 
        // const roomCount = document.getElementById('roomCount').value;
        const guestDetails = {
            name,
            mobile,
            email,
            city,
            state,
            country,
        }  
        console.log(guestDetails)
    }
    render(){
        return (
            <>
            <br></br>
            <div className="jumbotron" style={{marginLeft:"250px",marginRight:"300px",marginTop:"100px"}}>
            <h1>Fill the details to book room</h1>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Name*</label>
                    <input type="text" className="form-control" id="name" placeholder="Type your name here"/>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Mobile Number</label>
                    <input type="number" className="form-control" id="mobile" placeholder="Type your mobile number here"/>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect2">Email Id</label>
                    <input type="email" className="form-control" id="mailid"></input>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">City</label>
                    <input className="form-control" id="city"></input>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">State</label>
                    <input className="form-control" id="state"></input>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Country</label>
                    <input className="form-control" id="country"></input>
                </div>
                {/* <div className="form-group">
                    <label for="exampleFormControlTextarea1">Number of Rooms</label>
                    <input type="Number" className="form-control" id="roomCount"></input>
                </div> */}
                <button className="btn btn-warning float-right" data-toggle="modal" data-target="#exampleModal" onClick={this.onProceed.bind(this)}>Select Type of Rooms</button>
                
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Select Type of Room you want to Book</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>
                            <b>It will generate a bill which can be used as reference while boarding the hotel. 
                                Not a problem even if you show the soft copy of the bill</b>
                        </p>
                        <select class="form-control" id="select">
                           {
                               this.state.rooms.map(room=>{
                                   return <option>{room.typeName}</option>
                               })
                           }
                        </select>
                    </div>
                    <div class="modal-footer">
                        {/* <a type="button" class="btn btn-secondary" data-dismiss="modal">cancel</a> */}
                        <button type="button" class="btn btn-primary">Confirm Booking</button>
                    </div>
                    </div>
                </div>
                </div>
            </>
        )
    }
}

export default GuestBook;