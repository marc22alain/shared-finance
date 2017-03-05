import React, { Component } from 'react';
import Header from './Header'
import Payment from './Payment';
import UnpaidBill from './UnpaidBill';
import PaidBill from './PaidBills';

class demDashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <Header />
        <div clasName="row">
            <div className="col-lg-6 col-lg-offset-3">
                <UnpaidBill />
            </div>
        </div>
      </div>
    );
  }
}

export default demDashboard;