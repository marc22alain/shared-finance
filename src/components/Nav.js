import React, { Component } from 'react';
import {Link} from 'react-router';
import './../styles/css/App.css';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        Login
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard">
                        Dashboard
                    </Link>
                </li>
            </ul>
        </div>
        {this.props.children} 
      </div>
    );
  }
}

export default Nav;