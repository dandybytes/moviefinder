import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <p>It's alive!</p>
      </div>
    );
  }
}

export default App;
