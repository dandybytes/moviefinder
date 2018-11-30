import React, { Component } from "react";
import { url_complete_popular, url_img_backdrop } from "../tools/url";
import "./Poster.css";

class Poster extends Component {
  state = {};

  componentDidMount() {
    fetch(url_complete_popular)
      .then(response => response.json())
      .then(result => {
        const randIndex = Math.floor(Math.random() * 20);
        console.log(url_complete_popular);
        console.log(result.results[randIndex]);
        this.setState(result.results[randIndex]);
      });
  }

  render() {
    console.log("poster rendered");
    console.log("poster state: ");
    console.log(this.state);

    const style = {
      backgroundImage: `url("${url_img_backdrop}${this.state.backdrop_path}")`
    };

    return (
      <section className="poster">
        <div
          className="poster-image"
          style={this.state.backdrop_path && style}
        />
        <div className="poster-text">
          <h1 className="poster-title">{"Movie Title"}</h1>
          <p className="poster-description">
            {
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa perferendis neque doloremque. Ipsa, corrupti sunt, corporis, labore tempore perferendis minus quo possimus illo obcaecati magnam repellat voluptas! Nisi, voluptas molestias!"
            }
          </p>
        </div>
      </section>
    );
  }
}

export default Poster;
