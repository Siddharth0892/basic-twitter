var mongoose = require('mongoose');
var User = require('../models/User.js');
var Tweet = require('../models/Tweet.js');

module.exports.searchUser = function(req, res) {
	var name = req.params.user;
	User.findOne({
		userName: name
	}, function(err, user) {
		if (err) return next(err);
		if (user) {
			tweetCount = Tweet.find({
				userName: name
			}).count({}, function(err, count) {
				user['tweetCount'] = count;
				return res.send(user);
			});
		}
	});
};