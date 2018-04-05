var mongoose = require('mongoose');

var TweetSchema = new mongoose.Schema({
  
  title: String,
  isLiked : {type : Boolean, default : false},
  updated_date: { type: Date, default: Date.now },
  hashtag : {type : Array, default : []},
  likesCount : { type: Number, default : 0 },
  userName : String
});

module.exports = mongoose.model('Tweet', TweetSchema, 'tweets');
