import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./App.css";

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
        const token = localStorage.getItem('token');
        const reqOptions = {
          headers: {
              Authorization: token
          }
      }
        const newEvent = {
            name: this.state.name,
            date: this.state.date,
            time: this.state.time,
            budget: this.state.budget,
            description: this.state.description
        }
        axios
        .post('https://event-planner-backend-larry.herokuapp.com/api/events', newEvent, reqOptions)
        .then(res => {
        console.log(res.data);
        window.location.href = '/'
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
          <>
            <div className="App__Form">
              <div className="PageSwitcher">
                <Link
                  activeClassName="PageSwitcher__Item--Active"
                  className="PageSwitcher__Item"
                  to="/">
                    Event List
                  </Link>
              </div>
              <div className="FormCenter">
                <div className="form-fields">
                    <form className="FormFields" onSubmit={this.addEvent}>
                      <div className="FormField">
                          <label className="FormField__Label">Name</label>
                          <input className="FormField__Input" type="text" name="name" onChange={this.changeHandler} value={this.state.name}/>
                      </div>
                      <div className="FormField">
                          <label className="FormField__Label">Date</label>
                          <input className="FormField__Input" type="text" name="date" onChange={this.changeHandler} value={this.state.date}/>
                      </div>
                      <div className="FormField">
                          <label className="FormField__Label">Address</label>
                          <input className="FormField__Input" type="text" name="address" onChange={this.changeHandler} value={this.state.address}/>
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
              </div>
            </div>
            <div className="App__Aside">
            </div>
          </>
        )
    }
}

export default AddEvent;
