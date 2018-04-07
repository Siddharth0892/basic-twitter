var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

//var ctrlProfile = require('../controllers/profile');
//var ctrlAuth = require('../controllers/authentication');
var ctrldelTweet = require('../controllers/deleteTweet');
var ctrlallTweet = require('../controllers/allTweets');
var ctrlsingleTweetById = require('../controllers/singleTweetById');
var ctrlsaveTweet = require('../controllers/saveTweet');
var ctrlupdateTweet = require('../controllers/updateTweet');
var ctrltweetsByHashTag = require('../controllers/tweetsByHashTag');
var ctrlsignup = require('../controllers/signup');
var ctrllogin = require('../controllers/login');
var ctrllogout  = require('../controllers/logout');
var ctrlsearchUser = require('../controllers/searchUser');
// profile
//router.get('/profile', auth, ctrlProfile.profileRead);
// authentication
//router.post('/register', ctrlAuth.register);
//router.post('/login', ctrlAuth.login);
//******************************************************************************
router.delete('/:id', ctrldelTweet.deleteTweet);
router.get('/', ctrlallTweet.allTweets);
router.get('/:id', ctrlsingleTweetById.singleTweetById);
router.post('/', ctrlsaveTweet.saveTweet);
router.put('/:id', ctrlupdateTweet.updateTweet);
router.get('/hashtag/:hashtag', ctrltweetsByHashTag.tweetsByHashTag);
router.post('/signup', ctrlsignup.signup);
router.post('/login', ctrllogin.login);
router.get('/logout', ctrllogout.logout);
router.get('/user/:user', ctrlsearchUser.searchUser);

module.exports = router;
