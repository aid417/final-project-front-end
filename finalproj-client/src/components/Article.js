import React, { Component } from "react";

import axios from "axios";

class Article extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(this.props.articles);
  }
  render() {
    return (
      <div>
        articles:
        {this.props.articles.map(article => {
          return (
            <div>
              <p>{article.title}</p>
              <img src={article.urlToImage}></img>{" "}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Article;
