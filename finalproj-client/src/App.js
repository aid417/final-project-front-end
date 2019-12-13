import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import NewUser from "./components/NewUser.js";
import NewsFeed from "./components/NewsFeed.js";
import Categories from "./components/Categories.js";
import Login from "./components/Login.js";
import Logout from "./components/Logout.js";
class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }
  render() {
    return (
      <div>
        <h1>News Site</h1>
        <NewUser />
        <Login />
        <Logout />
        <Categories />
        <h2>Today's Top Stories</h2>
        <NewsFeed loggedIn={this.state.loggedIn} />
      </div>
    );
  }
}
export default App;
