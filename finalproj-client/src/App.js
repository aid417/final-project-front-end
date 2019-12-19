import React, { Component } from "react";

import axios from "axios";
import NewUser from "./components/NewUser.js";
import NewsFeed from "./components/NewsFeed.js";

import Login from "./components/Login.js";

import UserPage from "./components/UserPage.js";
import Article from "./components/Article.js";
import SavedArticles from "./components/SavedArticles.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      merges: [],
      apiLoaded: false,
      userid: null
    };
    this.handleLoggedIn = this.handleLoggedIn.bind(this);
    this.getPersonalArticles = this.getPersonalArticles.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.endSession = this.endSession.bind(this);
  }
  componentDidMount() {
    console.log("component mounted");
    const status = localStorage.length > 0;

    status && this.getPersonalArticles();
  }
  async getPersonalArticles() {
    this.setState({ loggedIn: true });
    const user = localStorage.getItem("currentuser");

    const response = await axios.get(`http://localhost:3000/users/${user}`);
    let usermerges = [];
    response.data.merges.map(merge => {
      usermerges.push(merge.category_id);
      return merge.category_id;
    });

    await this.setState({
      merges: usermerges,
      apiLoaded: true,
      userid: user
    });
    console.log(this.state.apiLoaded);
  }
  handleLoggedIn() {
    console.log("handle login hit");
    this.setState({
      loggedIn: true
    });
    this.getPersonalArticles();
  }
  async endSession() {
    const id = localStorage.getItem("currentuser");
    const response = await axios.delete(`http://localhost:3000/sessions/${id}`);
    console.log(response);

    localStorage.clear();
    console.log(localStorage);
    this.handleLogOut();
  }
  handleLogOut() {
    console.log("handle logout hit");
    this.setState({
      loggedIn: false
    });
  }
  render() {
    return (
      <Router>
        <div>
          <div>
            {" "}
            <div className="header">
              <div className="head">
                {" "}
                <h1 className="mx-auto logo">News Your Way</h1>
              </div>

              <nav className="topnav">
                {" "}
                {this.state.loggedIn ? (
                  <button
                    className="navigation-link nav-item toplink logout"
                    onClick={this.endSession}
                  >
                    logout
                  </button>
                ) : (
                  <Link
                    className="navigation-link nav-item toplink"
                    to="/login"
                  >
                    login
                  </Link>
                )}
                <Link
                  className="navigation-link nav-item toplink"
                  to="/newuser"
                >
                  register
                </Link>
              </nav>
            </div>
            {this.state.loggedIn && (
              <div className="navdiv">
                <nav className=" mx-auto navigation text-center ">
                  <Link className="navigation-link nav-item bottomlink " to="/">
                    Home
                  </Link>

                  {this.state.apiLoaded && (
                    <Redirect from="/login" to="/personalfeed" />
                  )}

                  <Link
                    className="navigation-link nav-item bottomlink"
                    to="/personalfeed"
                  >
                    Your Feed
                  </Link>

                  <Link
                    className="navigation-link nav-item bottomlink"
                    to="/savedarticles"
                  >
                    Saved Articles
                  </Link>

                  {this.state.loggedIn ? (
                    <Link
                      className="navigation-link nav-item bottomlink"
                      to="/user"
                    >
                      Your Account
                    </Link>
                  ) : (
                    <Redirect from="/user" to="/" />
                  )}
                </nav>
              </div>
            )}
          </div>

          <Route path="/" exact component={Article} />
          <Route
            path="/login"
            render={props => (
              <Login {...props} handleLogin={this.handleLoggedIn} />
            )}
          />

          <Route
            path="/personalfeed"
            render={props => (
              <NewsFeed
                {...props}
                loggedIn={this.state.loggedIn}
                userMerges={this.state.merges}
              />
            )}
          />
          <Route path="/newuser" component={NewUser} />
          <Route
            path="/savedarticles"
            render={props => (
              <SavedArticles {...props} userid={this.state.userid} />
            )}
          />
          <Route
            path="/user"
            render={props => (
              <UserPage
                {...props}
                userid={this.state.userid}
                handleLogOut={this.handleLogOut}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}
export default App;
