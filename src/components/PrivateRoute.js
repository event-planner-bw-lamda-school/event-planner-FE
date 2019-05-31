import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import Login from './Login';
import SignUpForm from './SignUpForm';
import axios from 'axios';
import './App.css';


const PrivateRoute =  App => Login => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        isLoggingIn: true
      };
    }
    componentDidMount() {
      if (!localStorage.getItem('token')) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }

    loginUser = (userinfo) => {
      console.log(userinfo)
      // e.preventDefault();
      axios
        .post('https://event-planner-backend-larry.herokuapp.com/api/login', userinfo)
        .then(res => {
          console.log(res);
          localStorage.setItem("token", res.data.token)
          // localStorage.setItem("userid", res.data.id)
          this.setState({
            loggedIn: true
          })
        })
        .catch(err => console.log(err));
    };

    registerUser = (userinfo) => {
      console.log(userinfo);
      axios
        .post('https://event-planner-backend-larry.herokuapp.com/api/register', userinfo)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    };

    btnSelected = e => {
      e.preventDefault();
      const val = e.target.textContent.toLowerCase()
      if(val.includes('login')) {
        this.setState({
          isLoggingIn: true
        });
      } else {
        this.setState({
          isLoggingIn: false
        });
      }
      console.log();
    };

    render() {
      if(!this.state.loggedIn) {
        if(this.state.isLoggingIn) {
          return <Login loginUser={this.loginUser} btnSelected={this.btnSelected}/>
        } else {
          return <SignUpForm registerUser={this.registerUser} btnSelected={this.setState.btnSelected} />
        }
      } else {
        return <App />
      }

    }
  };
};

export default PrivateRoute;
