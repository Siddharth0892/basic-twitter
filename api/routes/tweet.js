var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Tweet = require('../models/Tweet.js');
var User = require('../models/User.js');

/* GET ALL TWEETS */


/* GET SINGLE TWEETS BY ID */


/* SAVE TWEETS */
router.post('/', function(req, res, next) {
	console.log(req.body.title);
	var searchText = req.body.title;
	var regexp = /\B\#\w\w+\b/g;
	result = searchText.match(regexp);
	req.body.hashtag = result;

	Tweet.create(req.body, function(err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* UPDATE TWEETS */


/* DELETE TWEETS */


/* GET TWEETS BY MONGO QUERY FOR HASHTAGS */


/* LOGIN & SIGNUP ROUTES */
/* sign up */
router.post('/signup', function(req, res, next) {

	var user = {
		userName: req.body.userName,
		pass: req.body.pass
	};
	User.create(user, function(err, newUser) {
		if (err) return next(err);
		return res.send(newUser);
	});
});

/* login */
router.post('/login', function(req, res, next) {
	var username = req.body.userName;
	var password = req.body.pass;
	User.findOne({
		userName: username,
		pass: password
	}, function(err, user) {
		if (err) return next(err);
		if (!user) return res.send('Not logged in!');
		return res.send(user);
	});
});

/* logout */
router.get('/logout', function(req, res) {
	if (err) return next(err);
	console.log('req.session.user');
});

/* SEARCH USER WITH USER NAME */
router.get('/users/:user', function(req, res, next) {
	var name = req.params.user;
	User.findOne({
		userName: name
	}, function(err, user) {
		if (err) return next(err);
		return res.send(user);
	});
});
module.exports = router;
