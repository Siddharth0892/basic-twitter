var mongoose = require('mongoose');
var Tweet = require('../models/Tweet.js');

module.exports.allTweets = function(req, res) {
Tweet.find(function(err, tweets) {
		if (err) return next(err);
		res.json(tweets);
	});
};

