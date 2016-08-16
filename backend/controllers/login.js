"use strict";

var login = function (req, res) {
    console.log(req.body);
    res.send({status: 'success'});
};

module.exports = login;