import React, { Component } from "react";
import axios from "axios";
// import axios from "axios";
class SavedArticles extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
    this.getArticles = this.getArticles.bind(this);
    this.removeArticle = this.removeArticle.bind(this);
  }
  componentDidMount() {
    this.getArticles();
  }
  async getArticles() {
    const response = await axios.get(
      `http://localhost:3000/users/${this.props.userid}`
    );
    console.log(response.data.articles);
    this.setState({
      articles: response.data.articles
    });
  }
  async removeArticle(id) {
    const response = await axios.delete(`http://localhost:3000/articles/${id}`);
    console.log(response);
    this.getArticles();
  }
  render() {
    return (
      <div>
        <h1>Saved Articles</h1>
        {this.state.articles.map((article, index) => {
          return (
            <div key={index}>
              <p>{article.title}</p>
              <img
                alt="not found"
                src={article.image}
                className="articleimage"
                height="100"
                width="150"
              ></img>{" "}
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                link
              </a>
              <button
                className="button"
                id={article.id}
                onClick={() => this.removeArticle(article.id)}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SavedArticles;
