import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/reducer-root";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Poster from "./components/Poster";
import SearchBar from "./components/SearchBar";
import MovieBoard from "./components/MovieBoard";
import "./App.css";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <div className="app">
        <Provider store={store}>
          <React.Fragment>
            <Header />
            <main>
              <Poster />
              <SearchBar />
              <MovieBoard />
            </main>
            <Footer />
          </React.Fragment>
        </Provider>
      </div>
    );
  }
}

export default App;
