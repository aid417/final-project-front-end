import React, { Component } from "react";

// import axios from "axios";

import Technology from "./Technology.js";
import Sports from "./Sports.js";
import Health from "./Health.js";
import Science from "./Science.js";
import Business from "./Business.js";
import Entertainment from "./Entertainment.js";
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
      ],
      business: false,
      entertainment: false,
      sports: false,
      health: false,
      science: false,
      technology: false
    };
  }
  async componentDidMount() {
    const userid = localStorage.getItem("currentuser");
    await this.setState({
      userid: userid,
      merges: this.props.merges
    });

    let userCategories = [];
    this.state.merges.map(merge => {
      this.state.categorynames.filter((category, index) => {
        if (merge === index + 1) {
          userCategories.push(category);
          this.setState({
            [category]: true
          });
          return category;
        } else {
          return "not a match";
        }
      });
      return merge;
    });
    this.setState({ usercategories: userCategories });
  }

  render() {
    return (
      <div>
        <h2>personal articles page</h2>

        {this.state.technology && <Technology />}
        {this.state.entertainment && <Entertainment />}
        {this.state.business && <Business />}
        {this.state.science && <Science />}
        {this.state.sports && <Sports />}
        {this.state.health && <Health />}
      </div>
    );
  }
}

export default PersonalArticles;
