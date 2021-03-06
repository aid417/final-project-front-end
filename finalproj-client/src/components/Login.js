import React, { Component } from "react";

import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const formData = {
      //   user: {
      //     id: 5,
      //     password: this.state.password
      //   }
      username: this.state.username,
      password: this.state.password
    };
    const response = await axios.post(
      "http://localhost:3000/sessions",
      formData
    );
    localStorage.setItem("currentuser", response.data.msg.id);
    // console.log(response.data.msg.id);
    // console.log(localStorage);
    this.setState({
      username: "",
      password: ""
    });
    this.props.handleLogin();
  }
  handleChange(event) {
    this.setState({
      [event.currentTarget.id]: event.currentTarget.value
    });
  }
  render() {
    return (
      <div>
        <div className="login">
          <form className="mx-auto form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              id="username"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
              placeholder="username"
              className="input"
            />
            <input
              type="text"
              id="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              placeholder="password"
              className="input"
            />
            <input type="submit" className="loginbutton" value="login" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
