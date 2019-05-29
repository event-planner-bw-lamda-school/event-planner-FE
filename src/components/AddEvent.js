import React, {Component} from 'react';
import axios from 'axios';

class AddEvent extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            eventTitle: "",
            date: "",
            location: "",
            address: "",
            city: "",
            state: "",
            time: "",
            budget: "",
            description: ""
        } 
    }



    addEvent = e => {
        e.preventDefault();
        const newEvent = {
            name: this.state.name,
            email: this.state.email,
            eventTitle: this.state.eventTitle,
            date: this.state.date,
            location: this.state.location,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            time: this.state.time,
            budget: this.state.budget,
            description: this.state.description
        }
        axios
        .post('http://localhost:3000/event-list', newEvent)
        .then(res => {
        console.log(res.data);
        this.props.onSubmit(res.data);

        })
        .catch(err => console.log(err));
    }

   changeHandler = (e) => {
       this.setState({
           [e.target.name]: e.target.value
       })
   }

    render(){
        return(
            <div className="form-fields">
                <form className="FormFields" onSubmit={this.addEvent}>
                    <div className="FormField">
                        <label className="FormField__Label">Name</label>
                        <input className="FormField__Input" type="text" name="name" onChange={this.changeHandler} value={this.state.name}/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label">Email</label>
                        <input className="FormField__Input" type="email" name="email" onChange={this.changeHandler} value={this.state.email}/>
                    </div>
                    <div className="FormField"> 
                        <label className="FormField__Label">Event Title</label>
                        <input className="FormField__Input" type="text" name="eventTitle" onChange={this.changeHandler} value={this.state.eventTitle}/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label">Date</label>
                        <input className="FormField__Input" type="text" name="date" onChange={this.changeHandler} value={this.state.date}/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label">Location</label>
                        <input className="FormField__Input" type="text" name="location" onChange={this.changeHandler} value={this.state.location}/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label">Address</label>
                        <input className="FormField__Input" type="text" name="address" onChange={this.changeHandler} value={this.state.address}/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label">City</label>
                        <input className="FormField__Input" type="text" name="city" onChange={this.changeHandler} value={this.state.city}/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label">State</label>
                        <input className="FormField__Input" type="text" name="state" onChange={this.changeHandler} value={this.state.state}/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label">Time</label>
                        <input className="FormField__Input" type="text" name="time" onChange={this.changeHandler} value={this.state.time}/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label">Budget</label>
                        <input className="FormField__Input" type="number" name="budget" onChange={this.changeHandler} value={this.state.budget}/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label">Description</label>
                        <input className="FormField__Input" type="text" name="description" onChange={this.changeHandler} value={this.state.description}/>
                    </div>
                    <button className="FormField__Button" type="submit">Submit Event</button>
                </form>
            </div>
        )
    }
}

export default AddEvent;