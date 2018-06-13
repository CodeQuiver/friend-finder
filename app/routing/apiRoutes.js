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

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    app.post("/api/friends", function(req, res) {
        var currentUser = req.body; //set name for user who entered request for clarity

        
        friendData.push(currentUser);
        
        // reference the entries in friend array using friendData[i] in a for loop

        // Math.abs(-7.25); reference- absolute value method
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

        var bestFriend = friendData[bestFriendIndex];
        res.json(bestFriend);
        // this should send the bestFriend entry back to the page as a response, which will plug into the "data" argument


        // push current user data to frienddata array in friends.js file- make sure this happens after the above function ends
        // friendData.push(currentUser);

        // log entire friends array to check it's correct
        // console.log(res.json(friendData));
    

        // input function here to test compatibility with others in array? (per instructions)- come back to this
        // Dont need this - return friendData[bestFriendIndex];
    });

};