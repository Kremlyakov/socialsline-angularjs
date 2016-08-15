"use strict";

var login = function (req, res) {
    console.log(req.body);
    res.send('success');
};

module.exports = login;