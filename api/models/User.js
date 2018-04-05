var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	userName: String,
	pass: String,
	tweetCount: Number
});
var User = mongoose.model('User', UserSchema, 'users');
module.exports = User;