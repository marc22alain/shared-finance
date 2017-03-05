import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import './../../styles/css/Payment.css';

class Payment extends Component {
    constructor(){
        super();
        this.state = {
            open:false,
            unpaidBill :[
                {dueDate: "Feb 19", payee:"The Home Depot",amount:2000},
                {dueDate: "Feb 19", payee:"The Home Depot",amount:2000}
            ]
        }
    }
    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };
  render() {
      let checking = 50000;
      const style = {
        margin: 12,
    };
    
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];
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
        <div className="bills col-lg-6">
            <h3>Bills</h3>
            <div className="unpaid-bills">
                <h4>Unpaid Bills</h4>
                <Table selectable={false}>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>Due Date</TableHeaderColumn>
                        <TableHeaderColumn>Payee</TableHeaderColumn>
                        <TableHeaderColumn>Amount</TableHeaderColumn>
                        <TableHeaderColumn>Status</TableHeaderColumn>
                    </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                    { this.state.unpaidBill.map((data)=>{
                        return (
                            <TableRow>
                                <TableRowColumn>{data.dueDate}</TableRowColumn>
                                <TableRowColumn>{data.payee}</TableRowColumn>
                                <TableRowColumn>${data.amount}</TableRowColumn>
                                <TableRowColumn>
                                    <RaisedButton label="Pay Now" onClick={this.handleOpen} secondary={true} style={style} />
                                    <Dialog
                                        title="Dialog With Actions"
                                        actions={actions}
                                        modal={false}
                                        open={this.state.open}
                                        onRequestClose={this.handleClose}
                                        >
                                        The actions in this window were passed in as an array of React objects.
                                    </Dialog>
                                </TableRowColumn>
                            </TableRow>
                        )
                    })}
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