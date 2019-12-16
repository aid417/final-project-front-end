import React, { Component } from "react";

import PersonalArticles from "./PersonalArticles.js";
class NewsFeed extends Component {
  constructor(props) {
    super(props);
  }
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
