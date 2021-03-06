var mongoose = require('mongoose'),
  errorHandler = require('./error');

//Create and compile schema
var transactionSchema = mongoose.Schema({
    value: {
        type: Number,
        required: 'Please input a value for the transaction'
    },
    payee: {
        type: String,
        required: 'Please input a name for the payee'
    },
    duedate: {
        type: String,
        required: 'Please input a due date for the transaction'
    },
    status: {
        type: String,
        enum: ['unpaid', 'paid']
    },
    approved: {
        type: Boolean,
        required: 'Please provide a value for approved status'
    }
});

var Transaction = mongoose.model('Transaction', transactionSchema);

exports.Transaction = Transaction;

exports.createTransaction = function(data, callback) {
    var transaction = new Transaction(data);

    transaction.save(function (err, result) {
        if (err) {
            callback({ message: errorHandler.getErrorMessage(err)}, result);
        } else {
            callback(err, result);
        }
    });
};

exports.updateTransaction = function(req, callback) {
    // console.log(typeof(req.body));
    // console.log(req.transaction);
 //  var transaction = req.transaction;

 //  transaction = _.extend(transaction , req.body);

    var transaction = req.body;
    Transaction.update( { 'payee': transaction.payee }, { 'status': 'paid' }, function (err, result) {
        if (err) {
            callback({ message: errorHandler.getErrorMessage(err)}, result);
        } else {
            callback(err, result);
        }        
    });
}

exports.listTransactions = function(req, callback) {
    var keyNames = Object.keys(req.query);
    var val = req.query[keyNames[0]];

    if (keyNames.length === 0) {
        Transaction.find().exec(function(err, result) {
            if (err) {
                console.log(errorHandler.getErrorMessage(err));
            }
            else {
                callback(result);
            }
        });        
    } else {
        switch(keyNames[0]) {
            case 'status':
                Transaction.find({ 'status': val }).exec(function(err, result) {
                    if (err) {
                        console.log(errorHandler.getErrorMessage(err));
                    }
                    else {
                        callback(result);
                    }
                }); 
                break;
            default:
                // Invalid search returns an empty array
                callback([]);
        }
    }
}

exports.listUnpaidTransactions = function(callback) {
    Transaction.find({ 'status': 'unpaid'} ).exec(function(err, result) {
        if (err) {
            console.log(errorHandler.getErrorMessage(err));
        }
        else {
            callback(result);
        }
    });
}

