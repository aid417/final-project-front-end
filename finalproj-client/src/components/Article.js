import React, { Component } from "react";
import axios from "axios";
class Article extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
    this.getArticles = this.getArticles.bind(this);
  }

  componentDidMount() {
    // console.log("article component mounted");
    this.getArticles();
  }
  async getArticles() {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=92c19aec34bd461db5c18ce60b4a9433 "
    );
    // console.log(response);
    await this.setState({
      articles: response.data.articles
    });
  }
  render() {
    return (
      <div>
        <h2>Today's Top Stories</h2>
        {this.state.articles.map((article, index) => {
          return (
            <div key={index}>
              <p>{article.title}</p>
              <img
                alt="not found"
                src={article.urlToImage}
                className="articleimage"
                height="100"
                width="150"
              ></img>{" "}
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                link
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Article;
