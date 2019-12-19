import React, { Component } from "react";

import axios from "axios";

class NewUser extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const formData = {
      user: {
        name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      }
    };
    const response = await axios.post("http://localhost:3000/users", formData);
    console.log(response);
    this.setState({
      name: "",
      username: "",
      email: "",
      password: ""
    });
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
              id="name"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              placeholder="name"
              className="input"
            />
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
              id="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              placeholder="email"
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
            <input type="submit" value="register" className="registerbutton" />
          </form>
        </div>
      </div>
    );
  }
}

export default NewUser;
