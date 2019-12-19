import React, { Component } from "react";

import axios from "axios";

class Categories extends Component {
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
        <div className="addcategory">
          <h2 className="mx-auto categoryheader">Available Categories:</h2>
          <div className="categorybutton">
            <button
              className="button category"
              onClick={this.addCategory}
              id="1"
            >
              Business
            </button>
            <button
              className="button category"
              onClick={this.addCategory}
              id="2"
            >
              Entertainment
            </button>
            <button
              className="button category"
              onClick={this.addCategory}
              id="3"
            >
              Sports
            </button>
            <button
              className="button category"
              onClick={this.addCategory}
              id="4"
            >
              Health
            </button>
            <button
              className="button category"
              onClick={this.addCategory}
              id="5"
            >
              Science
            </button>
            <button
              className="button category"
              onClick={this.addCategory}
              id="6"
            >
              Technology
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
