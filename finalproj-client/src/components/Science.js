import React, { Component } from "react";

import axios from "axios";

class Science extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
    this.getArticles = this.getArticles.bind(this);
  }
  componentDidMount() {
    this.getArticles();
  }
  async getArticles() {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=92c19aec34bd461db5c18ce60b4a9433 `
    );
    this.setState({
      articles: response.data.articles
    });
    console.log(this.state.articles);
  }
  render() {
    return (
      <div>
        <h1>Science</h1>
      </div>
    );
  }
}

export default Science;
