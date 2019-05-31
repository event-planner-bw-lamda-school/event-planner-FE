import React, {Component} from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';
import TodoList from '../TodoComponents/TodoList';
import TodoForm from '../TodoComponents/TodoForm';
import axios from 'axios';



import items from '../data';

const Todo = [
  {
    task: 'Bring more chairs',
    id: 5,
    completed: false
  },
  {
    task: 'Add more flowers',
    id: 2,
    completed: false
  },
  {
    task: 'Test microphones',
    id: 7,
    completed: false
  },
  {
    task: 'Make sure is well prepped',
    id: 10,
    completed: false
  },
];


class EventList extends Component {
  constructor() {
    super();
    this.state = {
      Todo: Todo,
      items: []
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    const reqOptions = {
        headers: {
            Authorization: token
        }
    };
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

   toggleItem = itemId => {
    this.setState({
      Todo: this.state.Todo.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            purchased: !item.purchased
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = (event, item) => {
    event.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      Todo: [...this.state.Todo, newItem]
    });
  };

  clearPurchased = event => {
    event.preventDefault();
    this.setState({
      Todo: this.state.Todo.filter(item => {
        return !item.purchased;
      })
    });
  };

    render(){
        return(
            <div>
                <HEADER>
                  <h1>Welcome!</h1>
                </HEADER>
                <STATUS className="myEvents">
                    <h2>My Events:</h2>
                    <Link to="/past" className="event_history">Past</Link><span className="span_break">|</span><Link to="/upcoming" className="event_history">Upcoming</Link><span className="span_break">|</span><Link to="/add-event" className="event_history">Add Event</Link>
                </STATUS>
                <WRAPPER>
               {this.state.items.map(item => {
                   return (
                       <CARD>
                          <p>Client: {item.name}</p>
                          <p>Event: {item.eventTitle}</p>
                          <p>Date: {item.date}</p>
                          <p>Contact: {item.email}</p>
                          <Link to={`/event-list/${item.id}`}>
                            <button className="Detail-Button">Details</button>
                          </Link>
                       </CARD>

                   )
               })}
               </WRAPPER>
               <div className="shopping-list">
                 <h1>Shopping List</h1>
                 <TodoForm addItem={this.addItem} />
                 <TodoList
                  Todo={this.state.Todo}
                  toggleItem={this.toggleItem}
                  clearPurchased={this.clearPurchased}
                  />
               </div>
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
