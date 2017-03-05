var express = require('express'),
  transactions = require('../models/transaction'),
  router = express.Router();

/* GLOBALS */
var openResPWD, openResCGV;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Sharing Finances' });
});

/* Test route that works ... sends raw text. */
router.get('/data', function(req, res) {
	transactions.listUnpaidTransactions(function(data) {
		res.jsonp(data);
	});
});

/* Test route that works ... sends raw text. */
router.post('/data', function(req, res) {
	transactions.createTransaction(req.body, function(err, result) {
		if (err) {
			res.jsonp(result);
		} else {
			res.jsonp(result);
		}
	});
});

router.put('/payment', function(req, res) {
	transactions.updateTransaction(req, function(data) {
		// do nothing with the data
		var tranID = Math.floor(Math.random()*1000000);
		res.jsonp( { confirmation: tranID });
	});
});

/* Receive and handle long poll AJAX request from PWD's client. */
router.post('/longpollpwd', function(req, res) {
	// store the response object for later use
	openResPWD = res;
	// send a message to the CGV connection
	openResCGV.jsonp(req.body);
});

/* Receive and handle long poll AJAX request from caregiver's client. */
router.post('/longpollcgv', function(req, res) {
	// store the response object for later use
	openResCGV = res;
	// send a message to the PWD connection
	openResPWD.jsonp(req.body);
});

module.exports = router;
