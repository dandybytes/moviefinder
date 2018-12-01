import React, { Component } from "react";
import {connect} from "react-redux";
import { url_img_backdrop } from "../tools/url";
import "./Poster.css";

class Poster extends Component {
  state = {

  }
  render() {
    console.log("poster props");
    console.log(this.props);
    let backdrop;
    if (this.props.movies.movies) {
      backdrop = this.props.movies.movies[2].backdrop_path;
    }

    return (
      <section className="poster">
        <div
          className="poster-image"
          style={backdrop && {backgroundImage: `url("${url_img_backdrop}${backdrop}")`}}
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

const mapStateToProps = state => (state);

export default connect(mapStateToProps, null)(Poster);
