import React, { Component } from 'react';
import Header from './Header'
import Payment from './Payment';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <Header />
        <Payment />

      </div>
    );
  }
}

export default Dashboard;