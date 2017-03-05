import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Axios from 'axios';
import PaidBill from './PaidBills';
import './../../styles/css/Payment.css';

class UnpaidBill extends Component {
    constructor(props){
        super(props);
        this.state ={
            open:false,
            unpaidBill: [],
            value:null,
            transaction:null,
            submit: false
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handlePayment = this.handlePayment.bind(this);
    }
    componentDidMount(){
        Axios
            .get('https://sharedfinance.herokuapp.com/data?status=unpaid')
            .then((res)=>{
                console.log(res.data);
                let transaction = [...res.data]
                this.setState({
                    unpaidBill:res.data
                });
                if(this.props.role === "caregiver"){
                    Axios
                        .get('https://sharedfinance.herokuapp.com/longpoll')
                        .then((res)=>{
                            console.log(res);
                            this.props.flipSubmit();
                        })
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    handleOpen(info){
        console.log('hey');
        this.setState({
            open: true,
            value:info.value,
            transaction: info
        });   
    };
    handlePayment(){
        this.state.transaction.status = "paid";
        console.log(this.state.transaction);
        Axios
            .put('https://sharedfinance.herokuapp.com/payment',this.state.transaction)
            .then((res)=>{
                console.log(res);
                this.props.flipSubmit();
                this.setState({
                    open: false,
                });
            })      
    }
    handleClose = () => {
        this.setState({open: false});
    };
  render() {
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
                label="Pay"
                primary={true}
                keyboardFocused={true}
                onClick={this.handlePayment}
            />,
            ];
    return (
      <div className="dashboard-container">
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
                    { this.state.unpaidBill.map((info,i)=>{
                        if (info.status === "unpaid"){
                        return (
                            <TableRow key={i}>
                                <TableRowColumn>{info.duedate}</TableRowColumn>
                                <TableRowColumn>{info.payee}</TableRowColumn>
                                <TableRowColumn>${info.value}</TableRowColumn>
                                <TableRowColumn>
                                    <RaisedButton label="Pay Now" value={info.value}  onClick={()=>this.handleOpen(info)} secondary={true} style={style} />
                                </TableRowColumn>
                            </TableRow>
                        )
                        } { return }
                    })}
                    </TableBody>
                </Table>
                <Dialog
                    title="Payment Confirmation"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    >
                        Are you sure you want to pay ${this.state.value}?
                </Dialog>
            </div>
      </div>
    );
  }
}

export default UnpaidBill;