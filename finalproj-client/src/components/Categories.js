import React, { Component } from "react";

import axios from "axios";

class Categories extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <button>Business</button>
        <button>Technology</button>
        <button>Health</button>
        <button>Entertainment</button>
        <button>Science</button>
        <button>Sports</button>
      </div>
    );
  }
}

export default Categories;
