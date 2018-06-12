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
        var potentialFriends = friendData[i];


        // push current user data to frienddata array in friends.js file
        friendData.push(currentUser);

        // log entire friends array to check it's correct
        console.log(res.json(friendData));
    

        // input function here to test compatibility with others in array? (per instructions)- come back to this
       
    });

};