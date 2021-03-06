import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import history from '../history.js';
import { LoginContext, axios } from '../App';

import './Navbar.css';

class Navbar extends Component {
  navItems({ loggedIn, logout }) {
    if (loggedIn) {
      return (
        <React.Fragment>
          <Link to="/profile" className="brand">
            Asterisk
          </Link>

          <li>
            <Link
              to="/login"
              className="logout-btn"
              onClick={() => {
                logout();
                axios.get('/logout');
                history.push('/login');
              }}
            >
              Logout
            </Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
          </li>

          <li>
            <Link to="/search" className="light-btn">
              Add a Book
            </Link>
          </li>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Link to="/" className="brand">
            Asterisk
          </Link>

          <li>
            <Link to="/login">Login</Link>
          </li>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <div className="navbar-container">
        <ul className="navbar">
          <LoginContext.Consumer>{this.navItems}</LoginContext.Consumer>
        </ul>
      </div>
    );
  }
}

export default Navbar;
