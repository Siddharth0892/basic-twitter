var mongoose = require('mongoose');
var User = require('../models/User.js');

module.exports.signup = function(req, res) {
	User.findOne({
		userName: req.body.userName
	}, function(err, user) {
		if (err) {
			console.log(err);
		}
		var message;
		if (user) {
			message = "user exists";
		} else if (!user) {
			message = "You Have been successfully signed up, please login to continue";
			var toAddUser = {
				userName: req.body.userName,
				pass: req.body.pass
			};
			User.create(toAddUser, function(err, newUser) {
				if (err) return next(err);
			});
		}
		res.json({
			message: message
		});
	});
};