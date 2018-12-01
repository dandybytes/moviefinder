import React, { Component } from "react";
import { connect } from "react-redux";
import { url_img_backdrop } from "../tools/url";
import "./Poster.css";

class Poster extends Component {
  state = {
    isLoading: true,
    title: "",
    description: "",
    image: ""
  };

  componentDidUpdate() {
    const movies = this.props.movies;
    if (movies && this.state.isLoading) {
      const randIndex = Math.floor(Math.random() * movies.length);
      const movie = movies[randIndex];
      const backdrop = movie.backdrop_path;
      const image = `${url_img_backdrop}${backdrop}`;
      const title = movie.title;
      const description = movie.overview;
      this.setState({ isLoading: false, image, title, description });
    }
  }

  render() {
    return (
      <section className="poster">
        <div className="spinner-large" />
        <div
          className="poster-image"
          style={{
            backgroundImage: `linear-gradient(var(--color-1), transparent 20%), url("${
              this.state.image
            }")`
          }}
        />
        <div className="poster-text">
          <h1 className="poster-title">{this.state.title}</h1>
          <p className="poster-description">{this.state.description}</p>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({ movies: state.movies.movies });

export default connect(
  mapStateToProps,
  null
)(Poster);
