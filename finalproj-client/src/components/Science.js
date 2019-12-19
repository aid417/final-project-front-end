import React, { Component } from "react";

import axios from "axios";

class Science extends Component {
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
      `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=92c19aec34bd461db5c18ce60b4a9433 `
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
        <h1 className="mx-auto head">Science</h1>
        <div className="mx-auto article">
          {this.state.articles.map((article, index) => {
            return (
              <div key={index} className="mx-auto articleLink">
                <div className="mx-auto image">
                  <img
                    alt="not found"
                    src={article.urlToImage}
                    className="mx-auto articleimage"
                    height="125"
                    width="198"
                  ></img>{" "}
                  <a
                    className="mx-auto titlelink"
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="mx-auto title ">{article.title}</h3>{" "}
                  </a>
                </div>

                <div className=" emoji">
                  {" "}
                  <button
                    className=" special"
                    onClick={() => this.saveArticle(article)}
                  >
                    <span className="heart">&hearts;</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Science;
