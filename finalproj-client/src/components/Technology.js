import React, { Component } from "react";

import axios from "axios";

class Technology extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      userid: ""
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
      `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=92c19aec34bd461db5c18ce60b4a9433 `
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
        <h1>Technology</h1>
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

export default Technology;
