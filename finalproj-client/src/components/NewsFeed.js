import React, { Component } from "react";

import PersonalArticles from "./PersonalArticles.js";
class NewsFeed extends Component {
  componentDidMount() {
    console.log("news feed");
  }

  render() {
    return (
      <div>
        {this.props.loggedIn && (
          <PersonalArticles merges={this.props.userMerges} />
        )}
      </div>
    );
  }
}

export default NewsFeed;
