import React, { Component } from 'react';
import {
    BrowserRouter as Router, // we are aliasing this module for a cleaner call
    Route,
    Link
    // etc.
} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div className="nav">
                <Link to="board">Board</Link>&nbsp;|&nbsp;
                <Link to="about">About</Link>
            </div>
        );
    }
}

export default NavBar;
