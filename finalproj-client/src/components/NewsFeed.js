import React, { Component } from "react";

import axios from "axios";
import Article from "./Article.js";
import PersonalArticles from "./PersonalArticles.js";
class NewsFeed extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
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
    this.setState({
      articles: response.data.articles
    });
    console.log(response.data.articles);
  }
  render() {
    return (
      <div>
        {this.props.loggedIn ? (
          <PersonalArticles />
        ) : (
          <Article articles={this.state.articles} />
        )}
      </div>
    );
  }
}

export default NewsFeed;
