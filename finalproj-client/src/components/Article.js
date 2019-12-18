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
        <h2 className="mx-auto personal">Today's Top Stories</h2>
        <div className="mx-auto article">
          {" "}
          {this.state.articles.map((article, index) => {
            return (
              <div key={index} className="mx-auto articleLink">
                <a
                  className="mx-auto"
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="not found"
                    src={article.urlToImage}
                    className="mx-auto articleimage"
                    height="125"
                    width="200"
                  ></img>{" "}
                </a>
                <h3 className="mx-auto title">{article.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Article;
