import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./App.css";

const URL = "https://event-planner-backend-larry.herokuapp.com/api"
const token = localStorage.getItem('token');
const reqOptions = {
    headers: {
        Authorization: token
    }
};

class UpdateEvent extends Component {

    constructor() {
        super();
        this.state = {
            item: {
              name: "",
              date: "",
              time: "",
              budget: "",
              description: ""
            }
        }
    }
    componentDidMount() {
      const str = window.location.href
      const id = str[str.length -1]
      console.log(id)
      axios
        .get(`${URL}/events/${id}`, reqOptions)
        .then(res => {
          // console.log(res)
          this.setState({
            ...this.state,
            item: res.data[0]
          })
        });
    }

    updateEvent = e => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const reqOptions = {
          headers: {
              Authorization: token
          }
      }
        const updatedEvent = this.state.item
        axios
        .put(`https://event-planner-backend-larry.herokuapp.com/api/events/${updatedEvent.id}`, updatedEvent, reqOptions)
        .then(res => {
        console.log(res.data);
        window.location.href = '/'
        })
        .catch(err => console.log(err));
    }

   changeHandler = (e) => {
     console.log(e.target.value)
       this.setState({
          ...this.state,
          item: {
            ...this.state.item,
            [e.target.name]: e.target.value
          }
       })

   }

    render(){

      if(this.state.item.name === ""){
        return <h1>Loading...</h1>
      } else {
        return(
          // <h1>Hi</h1>
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
                          <input className="FormField__Input" type="text" name="name" onChange={(e) => this.changeHandler(e)} value={this.state.item.name}/>
                      </div>
                      <div className="FormField">
                          <label className="FormField__Label">Date</label>
                          <input className="FormField__Input" type="text" name="date" onChange={(e) => this.changeHandler(e)} value={this.state.item.date}/>
                      </div>
                      <div className="FormField">
                          <label className="FormField__Label">Time</label>
                          <input className="FormField__Input" type="text" name="time" onChange={(e) => this.changeHandler(e)} value={this.state.item.time}/>
                      </div>
                      <div className="FormField">
                          <label className="FormField__Label">Budget</label>
                          <input className="FormField__Input" type="number" name="budget" onChange={(e) => this.changeHandler(e)} value={this.state.item.budget}/>
                      </div>
                      <div className="FormField">
                          <label className="FormField__Label">Description</label>
                          <input className="FormField__Input" type="text" name="description" onChange={(e) => this.changeHandler(e)} value={this.state.item.description}/>
                      </div>
                      <button className="FormField__Button" type="submit" onClick={(e) => this.updateEvent(e)}>Submit Event</button>
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
}

export default UpdateEvent;
