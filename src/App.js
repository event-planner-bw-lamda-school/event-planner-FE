import React from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LogIn from './components/LogIn'
import EventList from './components/EventList';
import Event from './components/Event';
import Styled from 'styled-components';

function App() {
  return (
    <div className="App">
         <HEADER>
           <h3 className="title">Planner<span>-plus</span></h3>
              <nav>
                <Link exact to="/" className="navBtn">Home</Link>
                <Link to="/login" className="login navBtn">Login/Logout</Link>
                <Link to="/event-list" className="navBtn">Events</Link>
              </nav>
          </HEADER>
    

      <Route  exact path="/" component={Home}/>
      <Route path="/login" component={LogIn} />
      <Route exact path="/event-list"  component={EventList}/>
      <Route path="/event-list/:id" component={Event} />
    </div>
  );
}

export default App;

const HEADER = Styled.div `
   height: 100px;
   background-color: rgba(89, 89, 89, .8);
   border-bottom: 2px solid 	rgba(128, 128, 128, .7);
   display: flex;
   align-items: center;
   justify-content: space-around;

   .title {
    font-family: 'Syncopate', sans-serif;
     transform: skew(0deg,-5deg)
   }
   h3 {
     font-size: 1.8rem;
     text-shadow: 2px 1px 1px  #FF0000;
   }
   span {
     color: red;
     text-shadow: 2px 1px 1px  black;
   }
   .navBtn {
     text-decoration: none;
     font-weight: bold;
     color: white;
   }

   .login{
     margin: 0 15px;
   }
`
