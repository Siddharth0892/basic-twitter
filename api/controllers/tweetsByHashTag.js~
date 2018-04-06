var mongoose = require('mongoose');
var Tweet = require('../models/Tweet.js');

module.exports.tweetsByHashTag = function(req, res) {
	var encodedUri = encodeURI(req.params.hashtag);
	console.log(encodedUri);
	Tweet.find({
		"hashtag": {
			"$regex": encodedUri
		}
	}, function(err, tweets) {
		if (err) return next(err);
		res.json(tweets);
	});
};
