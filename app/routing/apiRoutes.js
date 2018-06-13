// ===============================================================================
// LOAD DATA
// ===============================================================================

var friendData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    // API GET Requests
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    // API POST Requests - handles when a user submits a form

    app.post("/api/friends", function(req, res) {
        var currentUser = req.body; //sets name for user who entered request for clarity

        friendData.push(currentUser); // push current user data to frienddata array in friends.js file

        // ========Begin Comparison of Survey Responses HERE========//
        var bestFriendScore = 99999999;
        var bestFriendIndex = -1;
        
        for (let i = 0; i < friendData.length; i++) {
            var compareFriend = friendData[i].scores;
            var totalDiff = 0;

           for (let j = 0; j < compareFriend.length; j++) {
                var userScore = currentUser.scores[j];
                var friendScore = compareFriend[j];
                totalDiff += Math.abs(userScore - friendScore);
            }

           // totalDiff is the sum of differences between friendData[i].scores and currentUser.scores
           if (bestFriendScore >= totalDiff) {
               bestFriendIndex = i;
               bestFriendScore = totalDiff;
           } // compare each entry in the array to the current best friend score. If the totalDiff is smaller that the current, replace the current with the new one and update the score. This eventually outputs the entry with the smallest totalDiff as bestFriendIndex
        }
        // ========END Comparison of Survey Responses HERE========//

        var bestFriend = friendData[bestFriendIndex]; //Final Result of comparison- best matching friend
        res.json(bestFriend); // Send the bestFriend entry back as a response in json format
    });

};