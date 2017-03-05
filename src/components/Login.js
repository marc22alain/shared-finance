import React, { Component } from 'react';
import './../styles/css/Login.css';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

class Login extends Component {
  render() {
      const style = {
        margin: 12,
        borderRadius: "4px",
        };
    return (
      <div className="login-container row">
        <div className="col-lg-4 col-lg-offset-4 wrapper">
            <h1>Independence <span id="skinny"style={{"fontWeight":"10"}}>Banking</span></h1>
            <div className="login-form">
                <div className="input-wrapper">
                    <label placeholder="username">Username</label>
                    <input className="username input"></input>
                </div>
                <div className="input-wrapper">
                    <label>Password</label>
                    <input type="password" className="password input"></input>
                </div>
                <Link style={{"linkDecoration":"none"}} to="/dashboard">
                    <div className="login-button">
                        <span>Login </span>
                    </div>
                </Link>
            </div>
            <p>Forgot password? Click <Link to="/dashboard"><strong>HERE!</strong></Link></p>
        </div> 
      </div>
    );
  }
}

export default Login;