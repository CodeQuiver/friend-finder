// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

var htmlRoutingFunctions = function(app) {
// HTML GET Requests
// Below code handles when users "visit" a page.
// ---------------------------------------------------------------------------

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // If no matching route is found default to home
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
        });
};

// Exporting function expression- now accessible via require
// I prefer doing it this way (at the bottom of the file) for consistency and to avoid unnamed functions.

module.exports = htmlRoutingFunctions;