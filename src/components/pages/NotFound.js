import React, { Component } from "react";
import "./NotFound.css";

class NotFound extends Component {
  state = {};
  render() {
    return (
      <div className="not-found">
        <h1>Ooops... This page doesn't exist.</h1>
      </div>
    );
  }
}

export default NotFound;
