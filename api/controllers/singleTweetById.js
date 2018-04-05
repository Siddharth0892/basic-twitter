var mongoose = require('mongoose');
var Tweet = require('../models/Tweet.js');
var ObjectID = require('mongodb').ObjectID;
module.exports.singleTweetById = function(req, res) {
	var id = req.params.id;
	console.log(id);
	console.log(!ObjectID.isValid(id));
	if (!ObjectID.isValid(id)) {
		console.log('should be here');
		return res.send('ObjectID is invalid');
	}
	Tweet.findById(req.params.id, function(err, post) {
		if (err) return next(err);
		res.json(post);
	});
};