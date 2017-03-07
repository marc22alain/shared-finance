var request = require('request');
var  transactions = require('./server/models/transaction'),
  fs = require('fs');

var mock_data = JSON.parse(fs.readFileSync('./mock.json'));

var populate = function() {
  mock_data.data.forEach(function(obj) {
	request({
      uri: 'https://sharedfinance.herokuapp.com/data',
      method: 'post',
      json: obj
    },
    function(error, response, body) {
      if (error) {
      	console.log(error);
      } else {
      	console.log(body);
      }
    });
  });
};

request({
  uri: 'https://sharedfinance.herokuapp.com/data',
  method: 'delete',
  },
  function(error, response, body) {
    if (error) {
      console.log(error);
    } else {
      console.log("DELETE");
      populate();
    }
});
