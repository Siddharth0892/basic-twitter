var mongoose = require('mongoose');
var Tweet = require('../models/Tweet.js');

module.exports.deleteTweet = function(req, res) {

 Tweet.findByIdAndRemove(req.params.id, req.body, function(err, post) {
		if (err) return next(err);
		res.status(200).json(post);
	});
};
