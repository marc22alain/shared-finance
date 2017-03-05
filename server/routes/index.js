var express = require('express');
var router = express.Router();

/* GLOBALS */
var openResPWD, openResCGV;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Sharing Finances' });
});

/* Test route that works ... sends raw text. */
router.get('/more', function(req, res) {
	res.jsonp({'not a page': 'brolly'});
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
