import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import './../../styles/css/Payment.css';

class Payment extends Component {
    constructor(){
        super();
        this.state = {
            unpaidBill :[
                {dueDate: "Feb 19", payee:"The Home Depot",amount:2000},
                {dueDate: "Feb 19", payee:"The Home Depot",amount:2000}
            ]
        }
    }
  render() {
      let checking = 50000;
    return (
    <div className="payment-container row"> 
        <div className="blue-bar col-lg-2">
            
        </div>
        <div className="account-balance col-lg-3">
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
        <div className="bills col-lg-4">
            <h3>Bills</h3>
            <div className="unpaid-bills">
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Status</TableHeaderColumn>
                    </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                    <TableRow>
                        <TableRowColumn>1</TableRowColumn>
                        <TableRowColumn>John Smith</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>2</TableRowColumn>
                        <TableRowColumn>Randal White</TableRowColumn>
                        <TableRowColumn>Unemployed</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>3</TableRowColumn>
                        <TableRowColumn>Stephanie Sanders</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>4</TableRowColumn>
                        <TableRowColumn>Steve Brown</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                    </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
        <div className="spending-distribution col-lg-3">
            <h3>Monthly Spend Distribution</h3>
        </div>
    </div>
    );
  }
}

export default Payment;