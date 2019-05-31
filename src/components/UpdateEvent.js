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
            item: res.data
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
     console.log(e)
       this.setState({
           [e.target.name]: e.target.value
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
                          <input className="FormField__Input" type="text" name="name" onChange={this.changeHandler} value={this.state.item[0].name}/>
                      </div>
                      <div className="FormField">
                          <label className="FormField__Label">Date</label>
                          <input className="FormField__Input" type="text" name="date" onChange={this.changeHandler} value={this.state.item[0].date}/>
                      </div>
                      <div className="FormField">
                          <label className="FormField__Label">Time</label>
                          <input className="FormField__Input" type="text" name="time" onChange={this.changeHandler} value={this.state.item[0].time}/>
                      </div>
                      <div className="FormField">
                          <label className="FormField__Label">Budget</label>
                          <input className="FormField__Input" type="number" name="budget" onChange={this.changeHandler} value={this.state.item[0].budget}/>
                      </div>
                      <div className="FormField">
                          <label className="FormField__Label">Description</label>
                          <input className="FormField__Input" type="text" name="description" onChange={this.changeHandler} value={this.state.item[0].description}/>
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
}

export default UpdateEvent;
