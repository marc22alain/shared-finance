var express = require('express'),
  transactions = require('../models/transaction'),
  router = express.Router();

/* GLOBALS */
var observers = [];

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Sharing Finances' });
});

/* Test route that works ... sends raw text. */
router.get('/data', function(req, res) {
	transactions.listTransactions(req, function(data) {
		res.jsonp(data);
	});
});

/* Test route that works ... sends raw text. */
router.post('/data', function(req, res) {
	transactions.createTransaction(req.body, function(err, result) {
		if (err) {
			res.status(400).send(err);
		} else {
			res.jsonp(result);
		}
	});
});

router.delete('/data', function(req, res) {
	transactions.Transaction.remove({}, function(err) {
		if (err) {
			res.status(400).send(err);
		} else {
			res.status(200).send();
		}
	});
});

router.put('/payment', function(req, res) {
	transactions.updateTransaction(req, function(data) {
		// do nothing with the data
		var tranID = Math.floor(Math.random()*1000000);
		res.jsonp( { confirmation: tranID });

		observers.forEach(function(res) {
			res.status(200).send();
		});
	});
});

/* Receive and handle long poll AJAX request from caregiver's client. */
router.post('/longpoll', function(req, res) {
	// register the observer
	observers.push(res);
});

module.exports = router;
