import React, { Component } from "react";
import axios from "axios";

class DeleteCategory extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      userid: null
    };
    this.getNames = this.getNames.bind(this);
  }

  componentDidMount() {
    console.log("delete category loaded");
    this.getNames();
  }
  async getNames() {
    const response = await axios.get("http://localhost:3000/categories");
    this.setState({
      categories: response.data
    });
  }
  render() {
    return (
      <div>
        buttons:
        {this.props.merges.map(merge => {
          this.state.categories.map(category => {
            if ((merge.category_id = category.id)) {
              return (
                <div key={merge.category_id}>
                  <button id={merge.category_id}>{category.name}</button>
                </div>
              );
            }
            return category;
          });
          return merge;
        })}
      </div>
    );
  }
}

export default DeleteCategory;
