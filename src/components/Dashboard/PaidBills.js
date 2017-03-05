import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Axios from 'axios';
import './../../styles/css/Payment.css';

class PaidBill extends Component {
    constructor(props){
        super(props);
        this.state ={
            open:false,
            paidBill: [],
            value:null,
            transaction:null
        }
    }
    componentDidMount(){
        Axios
            .get('https://sharedfinance.herokuapp.com/data?status=paid')
            .then((res)=>{
                console.log(res.data);
                let transaction = [...res.data]
                this.setState({
                    paidBill:res.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.submit !== this.props.submit){
            console.log('fetching');
            Axios
            .get('https://sharedfinance.herokuapp.com/data?status=paid')
            .then((res)=>{
                console.log(res.data);
                let transaction = [...res.data]
                this.setState({
                    paidBill:res.data
                });
                console.log('wohoooo')

            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
  render() {
        const style = {
            margin: 12,
        };
    return (
      <div className="dashboard-container">
            <div className="unpaid-bills">
                <h4>Paid Bills</h4>
                <Table selectable={false}>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>Due Date</TableHeaderColumn>
                        <TableHeaderColumn>Payee</TableHeaderColumn>
                        <TableHeaderColumn>Amount</TableHeaderColumn>
                    </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                    { this.state.paidBill.map((info,i)=>{
                        if (info.status === "paid"){
                        return (
                            <TableRow key={i}>
                                <TableRowColumn>{info.duedate}</TableRowColumn>
                                <TableRowColumn>{info.payee}</TableRowColumn>
                                <TableRowColumn>${info.value}</TableRowColumn>
                            </TableRow>
                        )
                        } { return }
                    })}
                    </TableBody>
                </Table>
            </div>
      </div>
    );
  }
}

export default PaidBill;