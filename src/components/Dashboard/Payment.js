import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import UnpaidBill from './UnpaidBill';
import PaidBill from './PaidBills';
import './../../styles/css/Payment.css';

class Payment extends Component {
    constructor(){
        super();
        this.state = {
            role:"caregiver",
            open:false,
            submit:false,
            unpaidBill :[
                {dueDate: "Feb 19", payee:"The Home Depot",amount:2000,paid:false},
                {dueDate: "Feb 19", payee:"The Home Depot",amount:2000,paid:false}
            ]
        }
        this.flipSubmit = this.flipSubmit.bind(this);
    }
    flipSubmit(){
        this.setState({
            submit: !this.state.submit
        })
    }
    render() {
      let checking = 50000;
      const style = {
        margin: 12,
    };
    return (
    <div className="payment-container row"> 
        <div className="blue-bar col-md-0 col-lg-2"> 
        </div>
        <div className="account-balance col-md-12 col-lg-3">
            <h3>Account Balances</h3>
            <div className="checking button">
                <span>Checking</span>
                <span>${checking}</span>
            </div>
            <div className="savings button">
                <span>Savings</span>
                <span>${checking}</span>
            </div>
            <div className="visa button">
                <span>Visa</span>
                <span>${checking}</span>
            </div>
        </div>
        <div className="bills col-md-12 col-lg-6">
            <UnpaidBill submit={this.state.submit} role={this.state.role} flipSubmit={this.flipSubmit}/>
            <PaidBill submit={this.state.submit} />
        </div>

    </div>
    );
  }
}

export default Payment;