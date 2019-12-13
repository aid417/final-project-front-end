import React, { Component } from "react";

import axios from "axios";

class Article extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("article component mounted");
  }
  render() {
    return (
      <div>
        articles:
        {this.props.articles.map((article, index) => {
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
            </div>
          );
        })}
      </div>
    );
  }
}

export default Article;
