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
    this.handleLoggedIn = this.handleLoggedIn.bind(this);
  }
  componentDidMount() {
    const status = localStorage.length > 0;

    {
      status && this.setState({ loggedIn: true });
    }
  }
  handleLoggedIn() {
    this.setState({
      loggedIn: !this.state.loggedIn
    });
  }
  render() {
    return (
      <div>
        <h1>News Site</h1>
        <NewUser />
        <Login handleLogin={this.handleLoggedIn} />
        <Logout handleLogout={this.handleLoggedIn} />
        <Categories />
        <h2>Today's Top Stories</h2>
        <NewsFeed loggedIn={this.state.loggedIn} />
      </div>
    );
  }
}
export default App;
