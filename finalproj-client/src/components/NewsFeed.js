import React, { Component } from "react";

import axios from "axios";

class NewsFeed extends Component {
  constructor() {
    super();

    this.getArticles = this.getArticles.bind(this);
  }
  componentDidMount() {
    console.log("component mounted");
    this.getArticles();
  }

  async getArticles() {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=92c19aec34bd461db5c18ce60b4a9433 "
    );
    console.log(response);
  }
  render() {
    return <div>Articles:</div>;
  }
}

export default NewsFeed;
