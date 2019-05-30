import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import Login from './Login';
import SignUpForm from './SignUpForm';
import axios from 'axios';

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
        this.setState({ loggedIn: true });
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
          console.log(res)
        })
        .catch(err => console.log(err))
    };

    registerUser = (userinfo) => {
      console.log(userinfo)
      axios
        .post('https://event-planner-backend-larry.herokuapp.com/api/register', userinfo)
        .then(res => {
          console.log(res)
        })
        .catch(err => console.log(err))
    };

    render() {
      console.log(this.state)
      if(this.state.isLoggingIn) {
        return <Login loginUser={this.loginUser} />
      } else {
        return <SignUpForm registerUser={this.registerUser} />
      }
      if (this.state.loggedIn) return <App />
    }
  };
};

export default PrivateRoute;
