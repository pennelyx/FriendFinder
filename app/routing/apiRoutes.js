var path = require("path");

var friends = require ("../data/friends.js");

var valueDiff = function (arr1, arr2){
	var total = 0;
	for (var i=0;i<arr1.length;i++) {
		total+=Math.abs(parseInt(arr1[i])-parseInt(arr2[i]));
	}
	return total;
}


var findFriend = function (friends){
	var friendIndex = 0;
	var minDiff = 50;
	var target = friends[friends.length-1];
	for (var i=0; i<friends.length-1;i++){
		var diff = valueDiff(friends[i].scores, target.scores);
		if (diff < minDiff){
			minDiff=diff;
			friendIndex =i;
		}
	}
	return friends[friendIndex];
}

module.exports = function (app){
	app.get("/api/friends", function(req,res){
		return res.json(friends);
	});

	app.post("/api/friends", function (req,res) {
		friends.push(req.body);
		return res.json(findFriend(friends));
	});
}





