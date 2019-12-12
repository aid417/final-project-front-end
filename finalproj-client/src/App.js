import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import NewUser from "./components/NewUser.js";
import NewsFeed from "./components/NewsFeed.js";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>News Site</h1>
        <NewUser />
        <NewsFeed />
      </div>
    );
  }
}
export default App;
