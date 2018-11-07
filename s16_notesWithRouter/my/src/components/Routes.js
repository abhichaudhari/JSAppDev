import React, { Component } from 'react';
import Board from './Board';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router, // we are aliasing this module for a cleaner call
    Route,
    Link
    // etc.
} from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div>
                <h1>About Us</h1>
                <p>We here at the Triple-R love fresh URLs, especially ones tied to awesome React Components.</p>
                <p>It's even better when you can switch between those URLs with ease and share them with friends and family</p>
            </div>
        );
    }
}

class NavBar extends Component {
    render() {
        return (
            <div className="nav">
                <Link to="about">About</Link>
            </div>
        );
    }
}

class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <hr />
                    <Route name="Board" path="/about" component={About} />
                    <Route name="About" path="/about" component={About} />
                </div>
            </Router>
        );
    }
}


export default Routes;
