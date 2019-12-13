import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import NewUser from "./components/NewUser.js";
import NewsFeed from "./components/NewsFeed.js";
import Categories from "./components/Categories.js";
import Login from "./components/Login.js";
import Logout from "./components/Logout.js";
import DeleteCategory from "./components/DeleteCategory.js";
class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      merges: []
    };
    this.handleLoggedIn = this.handleLoggedIn.bind(this);
    this.getPersonalArticles = this.getPersonalArticles.bind(this);
  }
  componentDidMount() {
    const status = localStorage.length > 0;

    {
      status && this.getPersonalArticles();
    }
  }
  async getPersonalArticles() {
    this.setState({ loggedIn: true });
    const user = localStorage.getItem("currentuser");
    const response = await axios.get(`http://localhost:3000/users/${user}`);
    this.setState({
      merges: response.data.merges
    });
    console.log(this.state.merges);
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
        {this.state.loggedIn && <Logout handleLogout={this.handleLoggedIn} />}
        {this.state.loggedIn && <Categories />}
        {this.state.loggedIn && <DeleteCategory merges={this.state.merges} />}
        <h2>Today's Top Stories</h2>
        <NewsFeed loggedIn={this.state.loggedIn} />
      </div>
    );
  }
}
export default App;
