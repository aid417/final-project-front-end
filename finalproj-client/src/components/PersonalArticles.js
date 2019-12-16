import React, { Component } from "react";

import axios from "axios";

class PersonalArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "",
      merges: [],
      usercategories: [],
      categorynames: [
        "business",
        "entertainment",
        "sports",
        "health",
        "science",
        "technology"
      ]
    };
    this.getArticles = this.getArticles.bind(this);
    this.getUserArticles = this.getUserArticles.bind(this);
  }
  async componentDidMount() {
    // console.log("personal articles loaded");
    // console.log(this.props.merges);
    const userid = localStorage.getItem("currentuser");
    await this.setState({
      userid: userid,
      merges: this.props.merges
    });
    // console.log(this.state);
    let userCategories = [];
    this.state.merges.map(merge => {
      this.state.categorynames.filter((category, index) => {
        if (merge == index + 1) {
          userCategories.push(category);
          // console.log(userCategories);
        } else {
          return "not a match";
        }
      });
    });
    this.setState({ usercategories: userCategories });
    console.log(this.state.usercategories);
    this.getUserArticles();
  }
  getUserArticles() {
    console.log(this.state.usercategories);
    this.state.usercategories.map(category => {
      this.getArticles(category);
    });
  }
  async getArticles(category) {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=92c19aec34bd461db5c18ce60b4a9433 `
    );
    console.log(response);
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
