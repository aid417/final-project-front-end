import React, { Component } from "react";

import axios from "axios";

class Entertainment extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
    this.getArticles = this.getArticles.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
  }
  componentDidMount() {
    this.getArticles();
  }
  async getArticles() {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=92c19aec34bd461db5c18ce60b4a9433 `
    );
    this.setState({
      articles: response.data.articles
    });
  }
  saveArticle(article) {
    console.log(article);
  }
  render() {
    return (
      <div>
        <h1>Entertainment</h1>
        {this.state.articles.map((article, index) => {
          return (
            <div key={index}>
              <p>{article.title}</p>
              <img
                src={article.urlToImage}
                className="articleimage"
                height="100"
                width="150"
              ></img>{" "}
              <a href={article.url} target="_blank">
                link
              </a>
              <button onClick={() => this.saveArticle(article)}>
                save article
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Entertainment;
