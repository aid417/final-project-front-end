import React, { Component } from "react";
import axios from "axios";
import picture1 from "./business.png";
import picture2 from "./health1.png.jpg";
import picture3 from "./sports1.png.jpg";
import picture4 from "./technology.jpg";
import picture5 from "./entertainment.jpg";
import picture6 from "./business2.jpg";
import picture7 from "./health2.jpg";
import picture8 from "./sports.jpg";
import picture9 from "./science.jpg";
class Article extends Component {
  constructor() {
    super();
    this.state = {
      apiLoaded: false,
      business: [],
      health: [],
      sports: [],
      technology: [],
      science: [],
      entertainment: []
    };
    this.getArticles = this.getArticles.bind(this);
  }

  componentDidMount() {
    // console.log("article component mounted");
    this.getArticles();
  }
  async getArticles() {
    const responsebusiness = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=92c19aec34bd461db5c18ce60b4a9433 `
    );
    const responsehealth = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=92c19aec34bd461db5c18ce60b4a9433 `
    );
    const responsesports = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=92c19aec34bd461db5c18ce60b4a9433 `
    );
    const responseentertainment = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=92c19aec34bd461db5c18ce60b4a9433 `
    );
    const responsetechnology = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=92c19aec34bd461db5c18ce60b4a9433 `
    );
    const responsescience = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=92c19aec34bd461db5c18ce60b4a9433 `
    );
    await this.setState({
      apiLoaded: true,
      business: responsebusiness.data.articles,
      health: responsehealth.data.articles,
      sports: responsesports.data.articles,
      entertainment: responseentertainment.data.articles,
      technology: responsetechnology.data.articles,
      science: responsescience.data.articles
    });
  }
  render() {
    return (
      <div>
        <h2 className="mx-auto personal">Today's Top Stories</h2>
        <div className="maindiv">
          <div className="leftdiv">
            <div className="leftleft">
              <img src={picture1} alt="business" height="300" width="450"></img>
              <h3 className="business">BUSINESS</h3>
              <div key="1">
                {this.state.apiLoaded && (
                  <a
                    href={this.state.business[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="title">{this.state.business[0].title}</p>
                  </a>
                )}
                {this.state.apiLoaded && (
                  <h4 className="by">
                    {" "}
                    by:{" "}
                    <span className="author">
                      {" "}
                      {this.state.business[0].author}
                    </span>
                  </h4>
                )}
                {this.state.apiLoaded && (
                  <p className="businessleft">
                    {this.state.business[0].description}
                  </p>
                )}
              </div>
            </div>
            <div className="leftright">
              <div className="leftcolumn">
                <img src={picture2} alt="health" height="175" width="275"></img>
                <h3 className="business">HEALTH</h3>
                {this.state.apiLoaded && (
                  <a
                    href={this.state.health[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="mediumtitle">{this.state.health[0].title}</p>
                  </a>
                )}
              </div>
              <div className="leftcolumn">
                <img src={picture3} alt="sports" height="175" width="275"></img>
                <h3 className="business">SPORTS</h3>
                {this.state.apiLoaded && (
                  <a
                    href={this.state.sports[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="mediumtitle">{this.state.sports[0].title}</p>
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="rightdiv">
            <div className="littlediv">
              <div className="littleImage">
                <img
                  src={picture4}
                  alt="technology"
                  height="140"
                  width="200"
                ></img>
              </div>
              <div className="littlearticle">
                <h3 className="business">TECHNOLOGY</h3>
                {this.state.apiLoaded && (
                  <a
                    href={this.state.technology[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="littletitle">
                      {this.state.technology[0].title}
                    </p>
                  </a>
                )}
              </div>
            </div>
            <div className="littlediv">
              <div className="littleImage">
                <img
                  src={picture5}
                  alt="technology"
                  height="140"
                  width="200"
                ></img>
              </div>
              <div className="littlearticle">
                <h3 className="business">ENTERTAINMENT</h3>
                {this.state.apiLoaded && (
                  <a
                    href={this.state.entertainment[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="littletitle">
                      {this.state.entertainment[0].title}
                    </p>
                  </a>
                )}
              </div>
            </div>
            <div className="littlediv">
              <div className="littleImage">
                <img
                  src={picture6}
                  alt="technology"
                  height="140"
                  width="200"
                ></img>
              </div>
              <div className="littlearticle">
                <h3 className="business">BUSINESS</h3>
                {this.state.apiLoaded && (
                  <a
                    href={this.state.business[1].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="littletitle">
                      {this.state.business[1].title}
                    </p>
                  </a>
                )}
              </div>
            </div>
            <div className="littlediv">
              <div className="littleImage">
                <img
                  src={picture7}
                  alt="technology"
                  height="140"
                  width="200"
                ></img>
              </div>
              <div className="littlearticle">
                <h3 className="business">HEALTH</h3>
                {this.state.apiLoaded && (
                  <a
                    href={this.state.health[1].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="littletitle">{this.state.health[1].title}</p>
                  </a>
                )}
              </div>
            </div>
            <div className="littlediv">
              <div className="littleImage">
                <img
                  src={picture8}
                  alt="technology"
                  height="140"
                  width="200"
                ></img>
              </div>
              <div className="littlearticle">
                <h3 className="business">SPORTS</h3>
                {this.state.apiLoaded && (
                  <a
                    href={this.state.sports[1].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="littletitle">{this.state.sports[1].title}</p>
                  </a>
                )}
              </div>
            </div>
            <div className="littlediv">
              <div className="littleImage">
                <img
                  src={picture9}
                  alt="technology"
                  height="140"
                  width="200"
                ></img>
              </div>
              <div className="littlearticle">
                <h3 className="business">SCIENCE</h3>
                {this.state.apiLoaded && (
                  <a
                    href={this.state.science[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="littletitle">{this.state.science[1].title}</p>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
