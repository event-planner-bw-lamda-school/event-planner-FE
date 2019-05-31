import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./App.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // const new
    // console.log('The form was submitted with the following data:');
    // console.log(this.state);
    this.props.loginUser(this.state);
  }

  render() {
    return (
      <>
        <div className="App">
          <div className="App__Form">
            <div className="PageSwitcher">
              <Link
                onClick={(e) => this.props.btnSelected(e)}
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Login
              </Link>
              <Link
                exact
                onClick={(e) => this.props.btnSelected(e)}
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign Up
              </Link>
            </div>

            <div className="FormTitle">
              <Link
                onClick={(e) => this.props.btnSelected(e)}
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Login
              </Link>
              or
              <Link
                exact
                onClick={(e) => this.props.btnSelected(e)}
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign Up
              </Link>
            </div>
            <div className="FormCenter">
              <form className="FormFields" onSubmit={this.handleSubmit}>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">
                    E-Mail Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="FormField__Input"
                    placeholder="Enter your email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="FormField__Input"
                    placeholder="Enter your password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="FormField">
                  <button onClick={(e) => this.handleSubmit(e)} className="FormField__Button mr-20">Sign In</button>{" "}
                  <Link to="/" onClick={(e) => this.props.btnSelected(e)} className="FormField__Link">
                    Don't have an Account? Sign Up
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="App__Aside">
          </div>
        </div>
      </>
    );
  }
}

export default Login;
