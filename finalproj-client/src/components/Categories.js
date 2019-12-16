import React, { Component } from "react";

import axios from "axios";

class Categories extends Component {
  constructor() {
    super();
  }

  async addCategory(event) {
    event.preventDefault();
    const category = event.currentTarget.id;
    const user = localStorage.getItem("currentuser");
    const newMerge = {
      category_id: category,
      user_id: user
    };
    const response = await axios.post(`http://localhost:3000/merges`, newMerge);
    console.log(response);
  }
  render() {
    return (
      <div>
        <button onClick={this.addCategory} id="1">
          Business
        </button>
        <button onClick={this.addCategory} id="2">
          Entertainment
        </button>
        <button onClick={this.addCategory} id="3">
          Sports
        </button>
        <button onClick={this.addCategory} id="4">
          Health
        </button>
        <button onClick={this.addCategory} id="5">
          Science
        </button>
        <button onClick={this.addCategory} id="6">
          Technology
        </button>
      </div>
    );
  }
}

export default Categories;
