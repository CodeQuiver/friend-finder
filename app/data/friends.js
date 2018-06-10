// ===============================================================================
// DATA
// This holds the user info and answers.
// I started it off with a few dummy users from the random user generator (https://randomuser.me/).
// ===============================================================================

var userArray = [
    {
    "name":"Ruben",
    "photo":"https://randomuser.me/api/portraits/men/55.jpg",
    "scores":[
        2,
        4,
        2,
        2,
        3,
        1,
        4,
        5,
        2,
        5
        ]
    },
    
    {
    "name":"Nellie",
    "photo":"https://randomuser.me/api/portraits/women/50.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
        ]
    },

    {
    "name":"Sharlene",
    "photo":"https://randomuser.me/api/portraits/women/30.jpg",
    "scores":[
        2,
        3,
        1,
        2,
        2,
        5,
        1,
        1,
        3,
        3
        ]
    },

    {
    "name":"Everett",
    "photo":"https://randomuser.me/api/portraits/men/46.jpg",
    "scores":[
        5,
        2,
        3,
        4,
        4,
        2,
        5,
        2,
        4,
        5
        ]
    },

    {
    "name":"Dana",
    "photo":"https://randomuser.me/api/portraits/women/80.jpg",
    "scores":[
        1,
        5,
        1,
        5,
        1,
        5,
        1,
        5,
        1,
        5
        ]
    }
];

// Exporting array- now accessible via require
module.exports = userArray;