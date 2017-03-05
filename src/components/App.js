import React, { Component } from 'react';
import Nav from './Nav'
import './../styles/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        Welcome to Share Finance
      </div>
    );
  }
}

export default App;
