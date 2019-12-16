import React, { Component } from "react";

import axios from "axios";

class Health extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      userid: null
    };
    this.getArticles = this.getArticles.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
  }
  componentDidMount() {
    const user = localStorage.getItem("currentuser");
    this.setState({
      userid: user
    });
    this.getArticles();
  }
  async getArticles() {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=92c19aec34bd461db5c18ce60b4a9433 `
    );
    this.setState({
      articles: response.data.articles
    });
  }
  async saveArticle(article) {
    const response = await axios.post(
      `http://localhost:3000/users/${this.state.userid}/articles`,
      {
        title: article.title,
        description: article.description,
        url: article.url,
        image: article.urlToImage,
        author: article.author,
        user_id: this.state.userid
      }
    );
    console.log(response);
  }
  render() {
    return (
      <div>
        <h1 className="mx-auto head">Health</h1>
        <div className="mx-auto article">
          {this.state.articles.map((article, index) => {
            return (
              <div key={index} className="mx-auto articleLink">
                <img
                  alt="not found"
                  src={article.urlToImage}
                  className=" mx-auto articleimage"
                  height="100"
                  width="150"
                ></img>{" "}
                <p className="mx-auto">{article.title}</p>
                <a
                  className="mx-auto"
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  link
                </a>
                <button
                  className="mx-auto button"
                  onClick={() => this.saveArticle(article)}
                >
                  save article
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Health;
