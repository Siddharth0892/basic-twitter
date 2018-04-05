var mongoose = require('mongoose');
var Tweet = require('../models/Tweet.js');

module.exports.singleTweetById = function(req, res) {
Tweet.findById(req.params.id, function(err, post) {
		if (err) return next(err);
		res.json(post);
	});
};

