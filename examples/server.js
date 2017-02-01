var steem = require('./../index');

steem.api.getAccountCount(function(err, result) {
	console.log(err, result);
});

steem.api.getAccounts(['dan'], function(err, result) {
	console.log(err, result);
	var reputation = steem.formatter.reputation(result[0].reputation);
	console.log(reputation);
});

steem.api.getState('trending/steemit', function(err, result) {
	console.log(err, result);
});

steem.api.getFollowing('ned', 0, 'blog', 10, function(err, result) {
	console.log(err, result);
});

steem.api.getFollowers('dan', 0, 'blog', 10, function(err, result) {
	console.log(err, result);
});

steem.api.streamOperations(function(err, result) {
	console.log(err, result);
});

steem.api.getDiscussionsByActive({
  limit: 10,
  start_author: 'thecastle',
  start_permlink: 'this-week-in-level-design-1-22-2017'
}, function(err, result) {
	console.log(err, result);
});