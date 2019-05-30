import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import Login from './components/Login';
import axios from 'axios';
import Event from './components/Event';
import EventList from './components/EventList';
import Swal from 'sweetalert2';
import PrivateRoute from './components/PrivateRoute';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    this.getEvent();
  }

 getEvent = () => {
   axios
     .get(`http://localhost:3000/events`)
     .then(res => {
       console.log(res.data);
       this.setState({
         events: res.data
       });
     });
 }

 deleteEvent = (id) => {
   axios
    .delete(`http://localhost:3000/events/${id}`)
    .then(res => {
      if (res.status === 200) {
        const events = [...this.state.events];
        let result = events.filter(event => (
          event.id !== id
        ));
        this.setState({
          events: result
        })
      }
    })
 }

 createEvent = (event) => {
   axios
    .post(`http://localhost:3000/events`, {event})
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
    .put(`http://localhost:3000/events/${id}`, {eventUpdate})
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

  render() {
    return (
      <div>
        <Router basename="/react-auth-ui/">
          <div className="App">
            {/* <div className="App__Form">
              <div className="PageSwitcher">
                  <NavLink to="/Log-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Login</NavLink>
                  <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                </div>

                <div className="FormTitle">
                    <NavLink to="/Log-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Login</NavLink>
                    or
                    <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                </div>

                <Route exact path="/" component={SignUpForm}>
                </Route>
                <Route path="/Log-in" component={Login}>
                </Route>
                <Route exact path="/event-list" component={EventList} />
                <Route path="/event-list/:id" component={Event} deleteEvent={this.deleteEvent}/>
            </div> */}
            <div className="App__Aside">
            </div>
          </div>
          <Route exact path="/event-list" component={EventList} />
          <Route path="/event-list/:id" component={Event} deleteEvent={this.deleteEvent}/>
        </Router>
        <Event event={this.state.event} deleteEvent={this.deleteEvent} />
        <EventList event={this.state.eventlist} />*/
      </div>
    );
  }
}

export default PrivateRoute(App)(Login);
