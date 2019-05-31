import React, { Component } from "react";
import Styled from "styled-components";
import items from "../data";
import { withRouter } from "react-router-dom";
import {Link, Route} from 'react-router-dom';
import UpdateEvent from './UpdateEvent';
import axios from 'axios';

const token = localStorage.getItem('token');
const reqOptions = {
    headers: {
        Authorization: token
    }
};
const URL = "https://event-planner-backend-larry.herokuapp.com/api"


class Event extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
}

  componentDidMount() {

    console.log(token);
    axios.get('https://event-planner-backend-larry.herokuapp.com/api/events', reqOptions)
      .then(res => {
        console.log(res)
        this.setState({
          ...this.state, items: res.data
        });
      })
      .catch(err => console.log(err));
  }

  deleteEvent = (e,id) => {
    e.preventDefault()
    axios
     .delete(`${URL}/events/${id}`, reqOptions)
     .then(res => {
       window.location.href = '/'
     })
  }

  render(){
    const item = this.state.items.find(item => {
      console.log(this.props.match.params);
      return `${item.id}` === this.props.match.params.id;
    });
    if (!item) return <h4>loading...</h4>;
    return (
      <>
      <div className="PageSwitcher">
        <Link
          activeClassName="PageSwitcher__Item--Active"
          className="PageSwitcher__Item"
          to="/" style={{height: "40px", marginTop: "20px"}}>
            Event List
          </Link>
      </div>

      <WRAPPER>
        <CARD className="card">
          <p>Client: {item.name}</p>
          <p>Event: {item.eventTitle}</p>
          <p>Date: {item.date}</p>
          <p>Time: {item.time}</p>
          <h4>Location</h4>
          <p>{item.location}</p>
          <p>
            Address:{" "}
            <span>
              {item.address}, {item.city}, {item.state}
            </span>
          </p>
          <h4>Budget</h4>
          <p>{item.budget}</p>
          <h4>Description</h4>
          <p>{item.description}</p>
          <button className="Card-btn" onClick={(e) => this.props.update(e, item)} >Update</button>
          <button className="Card-btn" onClick={(e) => this.deleteEvent(e, item.id)}>Delete</button>
        </CARD>
      </WRAPPER>
      </>

    );
  }
};

export default withRouter(Event);

const CARD = Styled.div`
    text-align: left;
    max-width: 500px;
    border: 1px solid black;
    padding: 10px;
    margin-top: 100px;
    margin-bottom: 300px;
    border-radius: 5px;
`;

const WRAPPER = Styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;
