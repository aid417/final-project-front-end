import React, { Component } from "react";

import axios from "axios";

class PersonalArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "",
      merges: [],
      categoryids: [1, 2, 3, 4, 5, 6],
      categorynames: [
        "business",
        "entertainment",
        "sports",
        "health",
        "science",
        "technology"
      ]
    };
  }
  async componentDidMount() {
    // console.log("personal articles loaded");
    console.log(this.props.merges);
    const userid = localStorage.getItem("currentuser");
    await this.setState({
      userid: userid,
      merges: this.props.merges
    });
    console.log(this.state);
    const matching = this.state.merges.map(merge => {
      this.state.categoryids.filter((index, name) => {
        if (merge.category_id === index + 1) {
          return name;
        } else {
          return "not a match";
        }
      });
    });
    console.log(matching);
  }
  async getArticles(category) {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=92c19aec34bd461db5c18ce60b4a9433 `
    );
  }
  render() {
    return (
      <div>
        <h2>personal articles page</h2>
      </div>
    );
  }
}

export default PersonalArticles;
