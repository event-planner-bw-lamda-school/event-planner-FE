import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import Login from './components/Login';
import axios from 'axios';
import Event from './components/Event';
import AddEvent from './components/AddEvent'
import EventList from './components/EventList';
import Swal from 'sweetalert2';
import PrivateRoute from './components/PrivateRoute';
import UpdateEvent from './components/UpdateEvent';
import './components/App.css'


const URL = "https://event-planner-backend-larry.herokuapp.com/api"
const token = localStorage.getItem('token');
const reqOptions = {
    headers: {
        Authorization: token
    }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      item: {}
    };
  }


  componentDidMount() {

  }

 getEvent = () => {
   axios
     .get(`${URL}/events`)
     .then(res => {
       console.log(res.data);
       this.setState({
         events: res.data
       });
     });
 }


 createEvent = (event) => {
   axios
    .post(`${URL}/events`, {event})
    .then(res => {
      if (res.status === 201) {
        Swal.fire(
          'Event Create',
          'It is created correctly.',
          'success'
        )
        let eventId = {id: res.data.id};
        const newEvent = Object.assign({}, res.data.post, eventId)
        this.setState(prevState => ({
          events: [...prevState.events, newEvent]
        }))
      }
    });
 }

 editEvent = (eventUpdate) => {
   const {id} = eventUpdate;

   axios
    .put(`${URL}/events/${id}`, {eventUpdate})
    .then(res => {
      if (res.status === 200) {
        Swal.fire(
          'Post Updated',
          'Changes saved correctly',
          'success'
        )
        let eventId = res.data.id;
        const events = [...this.state.events];
        const eventEdit = events.findIndex(event => eventId === event.id)
        events[eventEdit] = eventUpdate;
        this.setState({
          events
        })
      }
    })
 }

 update = (e, item) => {
   e.preventDefault();
   console.log(item)
   this.setState({
     ...this.state,
     item: item 
   })
   window.location.href =`/update/${item.id}`
 }

  render() {
    return (
      <div>
        <div basename="/react-auth-ui/">
          <div className="App">
          <Route exact path="/" component={EventList} />
          <Route exact path="/event-list/:id" render={(props) => <Event {...props} update={this.update}/>}/>
          <Route exact path="/add-event" component={AddEvent} />
          <Route
            exact path='/update/:id'
            render={(props) => <UpdateEvent {...props} item={this.state.item} />}
          />
            {/* <div className="App__Form">
              <div className="PageSwitcher">
                  {/* <NavLink to="/Log-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Login</NavLink>
                  <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink> */}
                </div>

                <div className="FormTitle">
                    {/* <NavLink to="/Log-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Login</NavLink>
                    or
                    <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink> */}
                </div>

                {/* <Route exact path="/" component={SignUpForm}> */}
                {/* </Route>
                <Route path="/Log-in" component={Login}>
                </Route> */}
                s
            </div>
            <div className="App__Aside">
            </div>
          </div>
                  )
    };   
}

export default PrivateRoute(App)(Login);
