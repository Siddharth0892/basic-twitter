var mongoose = require('mongoose');
var User = require('../models/User.js');
var storage = require('node-persist');
storage.initSync();
module.exports.logout = function(req, res) {
	console.log('inside' + req.body);
	storage.removeItemSync('username');
	res.send('You have been logged out');
};