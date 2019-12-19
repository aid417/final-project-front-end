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
        <div className="mx-auto article">
          {this.state.articles.map((article, index) => {
            return (
              <div key={index} className="mx-auto articleLink">
                <div className="mx-auto image">
                  <img
                    alt="not found"
                    src={article.image}
                    className="mx-auto articleimage"
                    height="125"
                    width="198"
                  ></img>{" "}
                  <h3 className="business">{article.description}</h3>
                  <a
                    className="mx-auto titlelink"
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="mx-auto personaltitle ">{article.title}</h3>{" "}
                  </a>
                </div>

                <div className=" emoji">
                  {" "}
                  <button
                    className=" special"
                    id={article.id}
                    onClick={() => this.removeArticle(article.id)}
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

export default SavedArticles;
