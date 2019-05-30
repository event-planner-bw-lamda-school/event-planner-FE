import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./App.css";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      role: "",
      company: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    let role = target.role;
    let company = target.company;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // add new client using the api
    console.log("The form was submitted with the following data:");
    console.log(this.state);
    const userInfo = this.state;
    if (
      userInfo.email === "" ||
      userInfo.password === "" ||
      userInfo.name === "" ||
      userInfo.role === "" ||
      userInfo.company === ""
    ) {
      alert("Fill in all the information!");
    } else {
      this.props.registerUser(userInfo);
    }
  }

  render() {
    return (
      <>
        <div className="App">
          <div className="App__Form">
            <div className="PageSwitcher">
            <NavLink
                onClick={(e) => this.props.btnSelected(e)}
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Login
              </NavLink>
              <NavLink
                exact
                onClick={(e) => this.props.btnSelected(e)}
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="FormTitle">
              <NavLink
                onClick={(e) => this.props.btnSelected(e)}
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Login
              </NavLink>
              or
              <NavLink
                exact
                onClick={(e) => this.props.btnSelected(e)}
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign Up
              </NavLink>
            </div>
              <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields">
                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="FormField__Input"
                      placeholder="Enter your full name"
                      name="name"
                      value={this.state.name}
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
                    <label className="FormField__Label" htmlFor="role">
                      Role
                    </label>
                    <input
                      type="text"
                      id="role"
                      className="FormField__Input"
                      placeholder="Enter your Role"
                      name="role"
                      value={this.state.role}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="company">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="FormField__Input"
                      placeholder="Enter your company name"
                      name="company"
                      value={this.state.company}
                      onChange={this.handleChange}
                    />
                  </div>
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
                    <button  className="FormField__Button mr-20">Sign Up</button>{" "}
                    <Link onClick={(e) => this.props.btnSelected(e)} className="FormField__Link">
                      Already a member? Login.
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </>
    );
  }
}
export default SignUpForm;
