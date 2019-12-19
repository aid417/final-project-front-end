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
        <h1>register</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="name"
          />
          <input
            type="text"
            id="username"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
            placeholder="username"
          />
          <input
            type="text"
            id="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            placeholder="email"
          />
          <input
            type="text"
            id="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            placeholder="password"
          />
          <input type="submit" value="sign up" />
        </form>
      </div>
    );
  }
}

export default NewUser;
