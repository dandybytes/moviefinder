import React, {Component} from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers/reducer-root";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import MovieDetailsPage from "./components/pages/MovieDetailsPage";
import Favorites from "./components/pages/Favorites";
import AboutPage from "./components/pages/AboutPage";
import NotFound from "./components/pages/NotFound";
import "./App.css";

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="app">
                        <Header />
                        <main>
                            <Switch>
                                <Redirect from="/" exact to="/about" />
                                <Route path="/movies" exact component={Home} />
                                <Route path="/movie/:movieId" exact component={MovieDetailsPage} />
                                <Route path="/favorites" exact component={Favorites} />
                                <Route path="/about" exact component={AboutPage} />
                                <Route component={NotFound} />
                            </Switch>
                        </main>
                        <Footer />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
