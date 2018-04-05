var mongoose = require('mongoose');
var User = require('../models/User.js');
var storage = require('node-persist');
//call storage.initSync
storage.initSync();
module.exports.login = function(req, res) {
	var username = req.body.userName;
	var password = req.body.pass;
	User.findOne({
		userName: username,
		pass: password
	}, function(err, user) {
		if (err) return next(err);
		if (!user) return res.send('Either username or password is incorrect');
		//then start using it
		storage.setItemSync('username', user.userName);
		var message = 'Welcome ' + user.userName;
		return res.send({
			message: message
		});
	});
};