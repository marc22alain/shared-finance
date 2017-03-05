var transaction = require('./models/transaction');
var mongoose = require('mongoose');

var localDB = 'mongodb://localhost/sharedfinance';

var bills = [{
  value: 250.93,
  payee: 'Bell',
  duedate: 'Apr 17, 2017'
},
{
  value: 125.67,
  payee: 'Toronto Hydro',
  duedate: 'Apr 26, 2017'
},{
  value: 55.15,
  payee: 'Visa',
  duedate: 'Apr 30, 2017'
}];

var count = bills.length;


module.exports = function() {
  mongoose.connect(localDB, function(err) {
  if (err) {
    console.log('OOPS! ', err);     
  }
  else {
    console.log('DB is good to go');
    transaction.Transaction.remove({}, function(err) {
      if (err) {
        console.log(err);
      }
      else {
        bills.forEach(function(bill) {
        transaction.createTransaction(bill, function() {
          console.log("create");
          decrement();
          });
        });
      }
    });
  }
});

  console.log("mocked");

};

var decrement = function () {
  count -= 1;
  if (count === 0) {
    disconnect();
  }
}

var disconnect = function() {
  mongoose.disconnect(function(err) {
    if (err) {
      console.log('OOPS! Could not close DB due to', err);    
    }
    else {
      console.log('DB is now closed');
    }
  });
}

