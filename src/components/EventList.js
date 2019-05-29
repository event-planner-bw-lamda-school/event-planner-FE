import React, {Component} from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';


import items from '../data';

class EventList extends Component {
    render(){
        return(
            <div>
                <HEADER>
                  <h3>Welcome <span>Kelly!</span></h3>
                </HEADER>
                <STATUS>
                    <h1>My Events</h1>
                    <Link to="/past" className="event_history">Past</Link><span className="span_break">|</span><Link to="/upcoming" className="event_history">Upcoming</Link><span className="span_break">|</span><Link to="/add-event" className="event_history">Add Event</Link>
                </STATUS>
                <WRAPPER>
               {items.map(item => {
                   return (
                       <CARD>
                          <p>Client: {item.name}</p>
                          <p>Event: {item.eventTitle}</p>
                          <p>Date: {item.date}</p>
                          <p>Contact: {item.email}</p>
                          <button><Link to={`/event-list/${item.id}`}>Details</Link></button>
                       </CARD>

                   )
               })}
               </WRAPPER>
            </div>
        )
    }
}

export default EventList;

const CARD = Styled.div `
    border: 1px solid black;
    padding 20px;
    margin: 10px;
    width: 300px;
    text-align: left;
    border-radius: 4px;
`

const HEADER = Styled.div `
display: flex;
    justify-content: space-around;
  div {
      display: flex;
      align-items: center;
  }
`
const STATUS = Styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  h1{
      margin-right: 40px;
  }
 .event_history {
     font-size: 1.4rem;
     text-decoration: none;
 }
 .span_break {
     font-size: 1.3rem;
     margin: 0 10px;
 }
`

const WRAPPER = Styled.div `
 width: 80%;
 margin: 0 auto;
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
`
