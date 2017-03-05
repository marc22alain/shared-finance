import React, { Component } from 'react';
import Header from './Header'
import './../styles/css/App.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <Header />
        Dashboard
      </div>
    );
  }
}

export default Dashboard;