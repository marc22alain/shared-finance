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

exports.listTransactions = function(callback) {
    Transaction.find().exec(function(err, result) {
        if (err) {
            console.log(errorHandler.getErrorMessage(err));
        }
        else {
            callback(result);
        }
    });
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

