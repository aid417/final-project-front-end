import React, { Component } from "react";

import axios from "axios";

class Logout extends Component {
  constructor() {
    super();

    this.logOut = this.logOut.bind(this);
  }

  async logOut() {
    // console.log("logging out");
    const id = localStorage.getItem("currentuser");
    const response = await axios.delete(`http://localhost:3000/sessions/${id}`);
    console.log(response);

    localStorage.clear();
    console.log(localStorage);
  }
  render() {
    return (
      <div>
        <button onClick={() => this.logOut()}>Logout</button>
      </div>
    );
  }
}

export default Logout;