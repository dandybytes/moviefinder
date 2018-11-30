import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Poster from "./components/Poster";
import SearchBar from "./components/SearchBar";
import MovieBoard from "./components/MovieBoard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <Poster />
          <SearchBar />
          <MovieBoard />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
