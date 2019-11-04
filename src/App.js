import React, {Component} from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers/reducer-root";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import MovieDetailsPage from "./components/pages/MovieDetailsPage";
import PopularPage from "./components/pages/PopularPage";
import TopRatedPage from "./components/pages/TopRatedPage";
import NowPlayingPage from "./components/pages/NowPlayingPage";
// import Favorites from "./components/pages/Favorites";
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
                                <Redirect from="/" exact to="/movies" />
                                <Route path="/movies" exact component={Home} />
                                <Route path="/movie/:movieId" exact component={MovieDetailsPage} />
                                <Route path="/popular" exact component={PopularPage} />
                                <Route path="/toprated" exact component={TopRatedPage} />
                                <Route path="/nowplaying" exact component={NowPlayingPage} />
                                {/* <Route path="/favorites" exact component={Favorites} /> */}
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
