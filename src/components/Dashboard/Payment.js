import React, { Component } from 'react';
import './../../styles/css/Payment.css';

class Payment extends Component {
  render() {
    return (
    <div className="payment-container"> 
        <div className="blue-bar">
        </div>
        <div className="payment-container row">
            <div className="account-balance col-lg-4">
                Yo 'sup
            </div>
            <div className="bills col-lg-4"></div>
            <div className="spending-distribution col-lg-4"></div>
        </div>
    </div>
    );
  }
}

export default Payment;