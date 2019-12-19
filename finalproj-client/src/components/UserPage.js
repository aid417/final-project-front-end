import React, { Component } from "react";

import axios from "axios";
import Categories from "./Categories.js";

class UserPage extends Component {
  constructor() {
    super();
    this.state = {
      userid: null
    };
    this.deleteUser = this.deleteUser.bind(this);
  }
  componentDidMount() {
    console.log("delete page loaded");
    this.setState({
      userid: this.props.userid
    });
  }

  async deleteUser() {
    const response = await axios.delete(
      `http://localhost:3000/users/${this.state.userid}`
    );
    console.log(response);
    console.log("delete user clicked");
    this.props.handleLogOut();
  }
  render() {
    return (
      <div>
        <div className="mx-auto userpage">
          <button
            className="button deleteuser"
            onClick={() => this.deleteUser()}
          >
            delete account
          </button>
          <Categories />
        </div>
      </div>
    );
  }
}

export default UserPage;
